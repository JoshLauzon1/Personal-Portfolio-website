#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 5000
HOST = "0.0.0.0"

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Add cache control headers to prevent caching issues in Replit
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == "__main__":
    print(f"Starting server at http://{HOST}:{PORT}")
    print("Serving portfolio website...")
    
    with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")