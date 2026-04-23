from PIL import Image
import os

def process_icon():
    input_path = r'c:\antigravity\aka-business-landing\public\favicon.png'
    output_path = r'c:\antigravity\aka-business-landing\src\app\icon.png'
    
    if not os.path.exists(input_path):
        print(f"Error: Input file {input_path} not found.")
        return

    # Abrir la imagen original
    img = Image.open(input_path).convert("RGBA")
    
    # Crear un fondo negro sólido del mismo tamaño
    background = Image.new("RGBA", img.size, (0, 0, 0, 255))
    
    # Superponer el logo sobre el fondo negro
    # alpha_composite respeta la transparencia del logo original
    final_img = Image.alpha_composite(background, img)
    
    # Asegurar que el directorio de destino exista
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Guardar como PNG
    final_img.save(output_path, "PNG")
    print(f"Éxito: Se ha añadido fondo negro sólido a {output_path}")

if __name__ == "__main__":
    process_icon()
