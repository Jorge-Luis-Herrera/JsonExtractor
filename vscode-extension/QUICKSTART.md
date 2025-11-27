# Guía Rápida de Uso

## Probar la Extensión

1. **Abrir en VS Code**
   ```bash
   code vscode-extension
   ```

2. **Iniciar modo debug**
   - Presiona `F5`
   - Se abrirá una nueva ventana de VS Code con la extensión cargada

3. **Probar funcionalidad**
   - En la nueva ventana, abre `documento1.txt` o `documento2.md`
   - Presiona `Ctrl+Shift+J` (o `Cmd+Shift+J` en Mac)
   - Se generará un archivo JSON automáticamente

## Instalar Permanentemente

```bash
cd vscode-extension
npm install -g @vscode/vsce
vsce package
code --install-extension json-extractor-1.0.0.vsix
```

## Características Implementadas

✅ **Atajo de teclado**: `Ctrl+Shift+J` / `Cmd+Shift+J`
✅ **Validación de archivos**: Solo .txt y .md
✅ **Detección automática de estructura**:
   - Encabezados Markdown (# ## ###)
   - Encabezados con subrayado (=== o ---)
   - Listas (-, *, •, 1., 2., etc.)
   - Párrafos
✅ **Metadatos**: Fecha, nombre, estadísticas
✅ **Opciones al terminar**: Abrir archivo o copiar al portapapeles

## Ejemplo de Salida

Para `documento1.txt`:
```json
{
  "metadata": {
    "fileName": "documento1.txt",
    "extractionDate": "2025-11-27T...",
    "totalLines": 45,
    "totalCharacters": 1523
  },
  "content": {
    "sections": [
      {
        "sectionNumber": 1,
        "title": "Introducción",
        "type": "heading1",
        "paragraphs": [...]
      }
    ]
  }
}
```

## Personalizar Atajo

Si quieres cambiar el atajo:
1. Edita `package.json`
2. Modifica la sección `keybindings`
3. Cambia `"key": "ctrl+shift+j"` por el que prefieras
