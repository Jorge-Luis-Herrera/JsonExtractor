# Changelog

## [1.0.0] - 2025-11-27

### Added
- Conversión de archivos .txt y .md a JSON estructurado
- Atajo de teclado Ctrl+Shift+J (Cmd+Shift+J en Mac)
- Detección automática de encabezados Markdown y estilo subrayado
- Detección de listas (con guiones, asteriscos y numeradas)
- Extracción de metadatos (fecha, nombre, estadísticas)
- Opción de abrir archivo generado o copiar al portapapeles
- Validación de tipos de archivo (.txt y .md solamente)
- Mensajes informativos de éxito y error

### Features
- Auto-guardado del JSON con sufijo `_extracted.json`
- Estructura JSON con secciones, párrafos y listas
- Preservación del texto completo en campo `rawText`
- Numeración automática de secciones
- Identificación de tipos de encabezado (heading1-6)
