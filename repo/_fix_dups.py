import sys, re
sys.stdout.reconfigure(encoding="utf-8")
with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    t = f.read()

# Find goDt function boundaries
idx1 = t.find("function goDt")
idx2 = t.find("(function(){var t=document.getElementById(\"navToggle\")")

# Get content between goDt start and nav toggle
between = t[idx1:idx2]
# Find the last } of goDt function (the closing brace of the function body)
last_goDt_brace = between.rfind("}")

print(f"goDt function starts at: {idx1}")
print(f"goDt last brace at (global): {idx1 + last_goDt_brace}")
print(f"Nav toggle at: {idx2}")

# Show what comes right after goDt's last }
after_goDt = t[idx1 + last_goDt_brace + 1 : idx1 + last_goDt_brace + 200]
print(f"\nAfter goDt last brace: {repr(after_goDt[:200])}")

# Keep everything before the duplicate blocks and everything from nav toggle onward
kept = t[: idx1 + last_goDt_brace + 1] + t[idx2:]

print(f"\nNew file length: {len(kept)} (was {len(t)})")
print(f"Removed {len(t) - len(kept)} chars of duplicates")

with open("C:/Users/11361/Documents/个人网站 3/repo/_index_cleaned.html", "w", encoding="utf-8") as f:
    f.write(kept)
print("Saved to _index_cleaned.html")
