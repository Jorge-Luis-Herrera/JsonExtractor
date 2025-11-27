# Manual de Usuario - JsonExtractor

## Descripción General

**JsonExtractor** es una herramienta diseñada para extraer contenido de documentos
y convertirlo a formato JSON estructurado.

## Instalación

```bash
# Activar entorno virtual
source env/bin/activate

# Instalar dependencias
pip install parsr-client
```

## Uso Básico

### Extracción Simple

Para extraer un documento:

```python
from main import extract_document_to_json

result = extract_document_to_json('mi_documento.pdf')
print(result)
```

### Configuración Avanzada

Puedes personalizar el proceso de extracción:

- **Formato de entrada**: PDF, TXT, DOCX, etc.
- **Servidor Parsr**: Configurable (local o remoto)
- **Opciones de limpieza**: Múltiples filtros disponibles

## Formatos Soportados

| Formato | Extensión | Estado |
|---------|-----------|--------|
| PDF     | .pdf      | ✅     |
| Texto   | .txt      | ✅     |
| Word    | .docx     | ✅     |
| Markdown| .md       | ✅     |

## Ejemplos

### Ejemplo 1: Procesar PDF
```python
extract_document_to_json('factura.pdf', output_file='factura.json')
```

### Ejemplo 2: Procesar múltiples documentos
```python
documentos = ['doc1.pdf', 'doc2.txt', 'doc3.docx']
for doc in documentos:
    extract_document_to_json(doc)
```

## Troubleshooting

### Error de conexión al servidor
- Verificar que el servidor Parsr esté ejecutándose
- Comprobar el puerto y la URL de conexión

### Timeout en la instalación
- Usar `--prefer-binary --timeout 120`
- Verificar conexión a internet

## Contribuciones

Para contribuir al proyecto:
1. Fork del repositorio
2. Crear rama feature
3. Commit de cambios
4. Pull request

---

*Última actualización: Noviembre 2025*
