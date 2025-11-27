from parsr_client import ParserClient
import json
import os
from pathlib import Path

def extract_document_to_json(file_path, server_url="localhost:3001", output_file=None):
    
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"El archivo {file_path} no existe")
    
    
    client = ParserClient(server_url)
    
    config = {
        'extractor': {'pdf': 'pdfminer'},
        'cleaner': [
            'words-to-line',
            'lines-to-paragraphs',
            'reading-order-detection',
            'header-footer-detection'
        ]
    }
    
    print(f"📄 Procesando documento: {file_path}")
    
    client.send_document(
        file_path=file_path,
        config=config,
        output_format='json'
    )
    
    json_output = client.get_json()
    
    if output_file:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(json_output, f, indent=2, ensure_ascii=False)
        print(f"✅ JSON guardado en: {output_file}")
    
    return json_output


def main():
    print("=== JsonExtractor - Extracción de Documentos ===")
    print("Formatos soportados: .txt, .md\n")
    
    while True:
        try:
            num_files = int(input("¿Cuántos archivos deseas procesar? "))
            if num_files > 0:
                break
            else:
                print("Por favor ingresa un número mayor a 0")
        except ValueError:
            print("Por favor ingresa un número válido")
    
    print()
    
    test_files = []
    for i in range(num_files):
        while True:
            file_name = input(f"Archivo {i+1}: ").strip()
            if file_name.lower().endswith(('.txt', '.md')):
                test_files.append(file_name)
                break
            else:
                print(" Solo se aceptan archivos .txt o .md")
    
    print("\n" + "="*50 + "\n")
    

    for file in test_files:
        if os.path.exists(file):
            try:
                output_name = f"{Path(file).stem}_extracted.json"
                result = extract_document_to_json(file, output_file=output_name)
                print(f"✨ Extracción exitosa de {file}")
                print(f"   Páginas procesadas: {len(result.get('pages', []))}")
                print()
            except Exception as e:
                print(f" Error procesando {file}: {e}")
                print()
        else:
            print(f" Archivo no encontrado: {file}")
            print()


if __name__ == "__main__":
    main()
