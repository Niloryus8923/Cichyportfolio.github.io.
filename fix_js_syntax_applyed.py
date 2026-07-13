import re
import os

base = r"C:\Users\11361\Documents\个人网站 3\repo"
html_path = os.path.join(base, "index.html")

with open(html_path, "rb") as f:
    data = f.read()
text = data.decode("utf-8")
# Fix 1: Po array missing closing ]
old1 = '''视觉包装"]};\r\r\nfunction rP(){'''
new1 = '''视觉包装"]}];\r\r\nfunction rP(){'''
if old1 in text:
    text = text.replace(old1, new1, 1)
    print("Fix 1 applied: Po array missing ]")
else:
    print("Fix 1 NOT found")
# Fix 2: Dt object missing closing }
old2 = '''阅读增长策略"]};\r\r\nfunction goDt'''
new2 = '''阅读增长策略"]}};\r\r\nfunction goDt'''
if old2 in text:
    text = text.replace(old2, new2, 1)
    print("Fix 2 applied: Dt object missing }")
else:
    print("Fix 2 NOT found")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(text)
print("File saved")
