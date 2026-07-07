import sys; sys.stdout.reconfigure(encoding="utf-8")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    t = f.read()
# Fix Po: remove extra ]
po_end = t.find("function rP()", t.find("var Po="))
old = t[po_end-8:po_end+20]
print("Before Po:", repr(old))
new = old.replace("}]]];\nfunction", "}];\nfunction")
t = t[:po_end-8] + new + t[po_end+20:]
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "w", encoding="utf-8") as f:
    f.write(t)
po_end2 = t.find("function rP()", t.find("var Po="))
print("After Po:", repr(t[po_end2-8:po_end2+20]))
