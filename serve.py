import http.server
import socketserver
import os

PORT = 8894
DIR = r"C:\Users\11361\Documents\个人网站 3\repo"

os.chdir(DIR)

class Handler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        mtype = super().guess_type(path)
        if path.endswith(".html"):
            return "text/html; charset=utf-8"
        if path.endswith(".css"):
            return "text/css; charset=utf-8"
        if path.endswith(".js"):
            return "application/javascript; charset=utf-8"
        return mtype

with socketserver.ThreadingTCPServer(("", PORT), Handler) as httpd:
    print(f"Serving on http://0.0.0.0:{PORT}")
    httpd.serve_forever()
