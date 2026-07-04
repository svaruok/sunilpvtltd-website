import re

def extract_jpeg_from_rtf(rtf_path, out_path):
    with open(rtf_path, 'r', encoding='latin-1') as f:
        content = f.read()
    
    # Find the JPEG start marker
    start_idx = content.find('ffd8')
    if start_idx == -1:
        print("No JPEG found.")
        return
        
    print(f"Found JPEG start at index {start_idx}")
    
    # Extract all hex characters and whitespace following the start marker
    hex_data = []
    for char in content[start_idx:]:
        if char in '0123456789abcdefABCDEF\r\n \t':
            if char not in '\r\n \t':
                hex_data.append(char)
        else:
            # We hit a non-hex character (e.g. '}' or '\'), end of image data
            break
            
    hex_string = "".join(hex_data)
    print(f"Extracted {len(hex_string)} hex characters.")
    
    # Ensure even length
    if len(hex_string) % 2 != 0:
        hex_string = hex_string[:-1]
        
    try:
        image_bytes = bytes.fromhex(hex_string)
        with open(out_path, 'wb') as out_file:
            out_file.write(image_bytes)
        print(f"Successfully wrote {len(image_bytes)} bytes to {out_path}")
    except Exception as e:
        print(f"Error parsing hex: {e}")

extract_jpeg_from_rtf(r'C:\Users\Lenovo\Downloads\logo.rtf', r'C:\Users\Lenovo\Desktop\sunilweb\public\logo.jpg')
