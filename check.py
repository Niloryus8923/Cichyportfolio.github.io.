import sys, re
sys.stdout.reconfigure(encoding="utf-8")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    data = f.read()

# Check Dt entries  
for m in re.finditer(r'[a-z]:\{', data):
    print(f"  Dt entry at {m.start()}: {m.group()}")

# Check where Dt starts
idx = data.find("var Dt=")
print(f"\nvar Dt= at position {idx}")
if idx >= 0:
    # Find where Dt ends (the }) before "function goDt"
    end = data.find("};\nfunction goDt", idx)
    if end >= 0:
        print(f"Dt ends at {end}")
        print(f"Last 80 chars of Dt: {repr(data[end-80:end+30])}")
