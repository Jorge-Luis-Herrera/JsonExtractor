# JSON Extractor

Extensión de VS Code que convierte documentos de texto (.txt y .md) a formato JSON estructurado con un simple atajo de teclado.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![VS Code](https://img.shields.io/badge/VS%20Code-1.80+-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

## ✨ Características

- 🎯 **Conversión rápida**: Presiona `Ctrl+Shift+J` (Windows/Linux) o `Cmd+Shift+J` (Mac)
- 📄 **Formatos soportados**: Archivos `.txt` y `.md`
- 🔍 **Detección inteligente**: Identifica automáticamente encabezados, párrafos y listas
- 💾 **Auto-guardado**: El JSON se guarda en la misma carpeta con sufijo `_extracted.json`
- 📋 **Flexibilidad**: Opción de abrir el archivo o copiar al portapapeles
- 📊 **Metadatos incluidos**: Fecha, estadísticas y estructura del documento

## 🚀 Uso

1. Abre un archivo `.txt` o `.md` en VS Code
2. Presiona `Ctrl+Shift+J` (o `Cmd+Shift+J` en Mac)
3. Elige si quieres abrir el JSON generado o copiarlo al portapapeles

![Demo](https://raw.githubusercontent.com/Jorge-Luis-Herrera/JsonExtractor/main/demo.gif)

## 📦 Estructura del JSON Generado

```json
{
  "metadata": {
    "fileName": "documento.txt",
    "extractionDate": "2025-11-27T...",
    "totalLines": 50,
    "totalCharacters": 1234
  },
  "content": {
    "sections": [
      {
        "sectionNumber": 1,
        "title": "Título de la sección",
        "type": "heading1",
        "paragraphs": ["Contenido..."],
        "list": ["Item 1", "Item 2"]
      }
    ],
    "rawText": "Texto completo del documento..."
  }
}
```

## 🎨 Detección de Estructura

La extensión detecta automáticamente:

- **Encabezados Markdown**: `# H1`, `## H2`, `### H3`, etc.
- **Encabezados subrayados**: 
  ```
  Título
  ======
  ```
- **Listas**: Con `-`, `*`, `•` o numeradas `1.`, `2.`
- **Párrafos**: Texto normal agrupado inteligentemente

## ⌨️ Atajos de Teclado

| Plataforma | Atajo |
|------------|-------|
| Windows/Linux | `Ctrl+Shift+J` |
| macOS | `Cmd+Shift+J` |

Puedes personalizar el atajo en: *Preferencias > Atajos de teclado > "JSON Extractor"*

## 📋 Requisitos

- Visual Studio Code 1.80.0 o superior
- Archivos con extensión `.txt` o `.md`

## 🔧 Instalación

### Desde VS Code Marketplace
1. Abre VS Code
2. Ve a Extensions (`Ctrl+Shift+X`)
3. Busca "JSON Extractor"
4. Haz clic en "Install"

### Desde archivo VSIX
```bash
code --install-extension json-extractor-1.0.0.vsix
```

## 💡 Casos de Uso

- Extraer contenido de documentos para procesamiento automatizado
- Convertir documentación a formato estructurado
- Integrar con pipelines de datos
- Análisis de contenido de texto
- Migración de contenido entre sistemas

## 🐛 Reporte de Issues

Encontraste un bug o tienes una sugerencia? [Crea un issue](https://github.com/Jorge-Luis-Herrera/JsonExtractor/issues)

## 📝 Licencia

MIT © Jorge Luis Herrera

## 🙏 Agradecimientos

Desarrollado con ❤️ para la comunidad de VS Code

---

**Disfruta de JSON Extractor!** ⭐ Si te gusta, deja una reseña en el Marketplace
