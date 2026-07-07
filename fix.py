import sys, re
sys.stdout.reconfigure(encoding="utf-8")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    data = f.read()

# Remove ALL existing entry k references  
data = re.sub(r',\{id:"k",cat:"digital",[^}]+h:\[[^\]]+\]}\]', "", data)
data = re.sub(r',k:\{[^}]+\}\}}', "", data)

# Add MINIMAL entry k to test  
data = data.replace("];\nfunction rP()", ',{id:"k",cat:"digital",r:"test",t:"test",b:"test",s:"test",h:["test"]}];\nfunction rP()')

with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "w", encoding="utf-8") as f:
    f.write(data)

count = len(re.findall(r'cat:"digital"', data))
print(f"Digital entries: {count}")
