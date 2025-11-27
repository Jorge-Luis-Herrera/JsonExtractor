const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * Convierte el contenido de un documento de texto a JSON estructurado
 * @param {string} content - Contenido del documento
 * @param {string} fileName - Nombre del archivo
 * @returns {object} - Objeto JSON con la estructura del documento
 */
function convertTextToJson(content, fileName) {
    const lines = content.split('\n');
    const result = {
        metadata: {
            fileName: fileName,
            extractionDate: new Date().toISOString(),
            totalLines: lines.length,
            totalCharacters: content.length
        },
        content: {
            sections: [],
            rawText: content
        }
    };

    let currentSection = null;
    let sectionCounter = 0;

    lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        
        // Detectar encabezados (líneas que terminan con === o ---)
        if (index < lines.length - 1) {
            const nextLine = lines[index + 1].trim();
            if (nextLine.match(/^={3,}$/) || nextLine.match(/^-{3,}$/)) {
                if (currentSection) {
                    result.content.sections.push(currentSection);
                }
                currentSection = {
                    sectionNumber: ++sectionCounter,
                    title: trimmedLine,
                    type: nextLine.match(/^={3,}$/) ? 'heading1' : 'heading2',
                    paragraphs: []
                };
                return;
            }
        }

        // Detectar encabezados Markdown
        const headerMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
        if (headerMatch) {
            if (currentSection) {
                result.content.sections.push(currentSection);
            }
            currentSection = {
                sectionNumber: ++sectionCounter,
                title: headerMatch[2],
                type: `heading${headerMatch[1].length}`,
                paragraphs: []
            };
            return;
        }

        // Añadir contenido a la sección actual
        if (trimmedLine.length > 0) {
            if (!currentSection) {
                currentSection = {
                    sectionNumber: ++sectionCounter,
                    title: 'Contenido principal',
                    type: 'content',
                    paragraphs: []
                };
            }
            
            // Detectar listas
            if (trimmedLine.match(/^[\-\*\•]\s+/) || trimmedLine.match(/^\d+\.\s+/)) {
                const listItem = trimmedLine.replace(/^[\-\*\•]\s+/, '').replace(/^\d+\.\s+/, '');
                if (!currentSection.list) {
                    currentSection.list = [];
                }
                currentSection.list.push(listItem);
            } else {
                currentSection.paragraphs.push(trimmedLine);
            }
        }
    });

    if (currentSection) {
        result.content.sections.push(currentSection);
    }

    return result;
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('JSON Extractor extension is now active');

    let disposable = vscode.commands.registerCommand('jsonExtractor.convertToJson', async function () {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage('No hay ningún editor activo');
            return;
        }

        const document = editor.document;
        const fileName = path.basename(document.fileName);
        const fileExtension = path.extname(document.fileName);

        // Validar que sea .txt o .md
        if (!['.txt', '.md'].includes(fileExtension.toLowerCase())) {
            vscode.window.showWarningMessage('Este comando solo funciona con archivos .txt o .md');
            return;
        }

        try {
            // Obtener contenido del documento
            const content = document.getText();

            // Convertir a JSON
            const jsonResult = convertTextToJson(content, fileName);

            // Crear nombre del archivo de salida
            const fileNameWithoutExt = path.basename(fileName, fileExtension);
            const outputFileName = `${fileNameWithoutExt}_extracted.json`;
            const outputPath = path.join(path.dirname(document.fileName), outputFileName);

            // Guardar archivo JSON
            fs.writeFileSync(outputPath, JSON.stringify(jsonResult, null, 2), 'utf-8');

            // Mostrar mensaje de éxito y abrir el archivo
            const openFile = await vscode.window.showInformationMessage(
                `✅ JSON generado: ${outputFileName}`,
                'Abrir archivo',
                'Copiar al portapapeles'
            );

            if (openFile === 'Abrir archivo') {
                const doc = await vscode.workspace.openTextDocument(outputPath);
                await vscode.window.showTextDocument(doc);
            } else if (openFile === 'Copiar al portapapeles') {
                await vscode.env.clipboard.writeText(JSON.stringify(jsonResult, null, 2));
                vscode.window.showInformationMessage('JSON copiado al portapapeles');
            }

        } catch (error) {
            vscode.window.showErrorMessage(`Error al convertir documento: ${error.message}`);
            console.error('Error:', error);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
