import sys
sys.stdout.reconfigure(encoding="utf-8")
import re
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    data = f.read()

# Find keywords from missing entries
for kw in ["\u827e\u65af", "\u4ebf\u4f17", "\u821e\u53f0", "\u96f7\u97f3", "\u53cb\u597d\u5de5\u4f5c", "\u7279\u65af\u62c9", "\u6b65\u5174", "\u6d77\u5c14", "\u8865\u5145"]:
    idx = data.find(kw)
    status = "found" if idx >= 0 else "not found"
    print(f"{kw}: {status}")
