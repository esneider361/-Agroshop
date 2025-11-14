#!/usr/bin/env python3
"""
Servidor HTTP simple para Agroshop
Sirve archivos estáticos desde el directorio public
"""

import http.server
import socketserver
import os
from pathlib import Path
import mimetypes

PORT = 3000
PUBLIC_DIR = Path(__file__).parent / "public"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PUBLIC_DIR), **kwargs)
    
    def end_headers(self):
        # Agregar headers para prevenir caché y CORS
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()
    
    def translate_path(self, path):
        # Si solicitan una ruta sin extensión, servir index.html
        translated = super().translate_path(path)
        if os.path.isdir(translated):
            return os.path.join(translated, 'index.html')
        return translated

if __name__ == "__main__":
    handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            print(f"🌾 Servidor Agroshop ejecutándose en http://localhost:{PORT}")
            print(f"✓ Sirviéndose archivos desde: {PUBLIC_DIR}")
            print(f"✓ Presiona Ctrl+C para detener el servidor\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✗ Servidor detenido.")
    except OSError as e:
        if e.errno == 48 or e.errno == 98:  # Port already in use
            print(f"❌ Error: El puerto {PORT} ya está en uso.")
            print(f"   Intenta usar otro puerto o detén el proceso que lo está usando.")
        else:
            print(f"❌ Error: {e}")
