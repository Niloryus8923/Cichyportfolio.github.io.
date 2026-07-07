import sys
sys.stdout.reconfigure(encoding="utf-8")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    text = f.read()
old1 = "视觉包装\"]};\nfunction rP(){ "
new1 = "视觉包装\"]}];\nfunction rP(){ "
if old1 in text:
    text = text.replace(old1, new1, 1)
    print("Fix 1 applied: Po array missing ]")
else:
    print("Fix 1: Pattern not found")
old2 = "阅读增长策略\"]};\nfunction goDt"
new2 = "阅读增长策略\"]}};\nfunction goDt"
if old2 in text:
    text = text.replace(old2, new2, 1)
    print("Fix 2 applied: Dt object missing }")
else:
    print("Fix 2: Pattern not found")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "w", encoding="utf-8") as f:
    f.write(text)
print("Saved")
