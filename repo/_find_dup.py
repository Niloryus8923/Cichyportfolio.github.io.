import sys, re
sys.stdout.reconfigure(encoding="utf-8")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    t = f.read()
pattern = r'document\.getElementById\("nH"\)\.onclick'
for m in re.finditer(pattern, t):
    start = max(0, m.start() - 30)
    end = min(len(t), m.end() + 50)
    print(f"Pos {m.start()}: ...{repr(t[start:end])}...")
print("---")
idx = t.find("function goDt")
print(f"function goDt at: {idx}")
idx2 = t.find('(function(){var t=document.getElementById("navToggle")')
print(f"Nav toggle at: {idx2}")
