import sys, re
sys.stdout.reconfigure(encoding="utf-8")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    t = f.read()
m = re.search(r"<script>(.*?)</script>", t, re.DOTALL)
script = m.group(1) if m else ""
osq = script.count("[")
ocu = script.count("{")
opa = script.count("(")
csq = script.count("]")
ccu = script.count("}")
cpa = script.count(")")
print("Script length:", len(script))
print("Open: [=", osq, ", {=", ocu, ", (=", opa)
print("Close: ]=", csq, ", }=", ccu, ", )=", cpa)
print("Square:", osq - csq)
print("Curly:", ocu - ccu)
print("Paren:", opa - cpa)
