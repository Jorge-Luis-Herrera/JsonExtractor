# JsonExtractor

Herramienta para extraer contenido de documentos y convertirlo a JSON usando Parsr.

## Requisitos

1. **Servidor Parsr ejecutándose**
   
   El cliente necesita un servidor Parsr activo. Opciones:
   
   ### Opción A: Usar Docker (Recomendado)
   ```bash
   docker run -p 3001:3001 axarev/parsr
   ```
   
   ### Opción B: Instalar Parsr localmente
   ```bash
   npm install -g @axa-rev/parsr
   parsr-server
   ```

2. **Dependencias Python**
   ```bash
   source env/bin/activate
   pip install parsr-client
   ```

## Uso

### Modo Automático
Ejecuta el script para procesar los documentos de prueba:
```bash
python main.py
```

### Uso Programático
```python
from main import extract_document_to_json

# Extraer y guardar en archivo
result = extract_document_to_json(
    'mi_documento.pdf',
    output_file='salida.json'
)

# Solo extraer (sin guardar)
result = extract_document_to_json('documento.txt')
```

## Archivos de Prueba

- `documento1.txt` - Informe técnico de ejemplo
- `documento2.md` - Manual de usuario en Markdown

## Estructura del JSON Resultante

```json
{
  "pages": [
    {
      "pageNumber": 1,
      "elements": [
        {
          "type": "paragraph",
          "content": "..."
        }
      ]
    }
  ],
  "metadata": {...}
}
```

## Notas Importantes

⚠️ **Servidor Parsr**: Asegúrate de que el servidor Parsr esté corriendo antes de ejecutar el script. Por defecto busca en `localhost:3001`.

🔧 **Configuración**: Puedes modificar la configuración de extracción en la función `extract_document_to_json()` del archivo `main.py`.

## Troubleshooting

### "Connection refused" o similar
→ El servidor Parsr no está ejecutándose. Inicia el servidor con Docker o npm.

### Timeout al instalar pandas
→ Usa: `pip install parsr-client --prefer-binary --timeout 120`
