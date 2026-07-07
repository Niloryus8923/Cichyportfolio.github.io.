with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add modal CSS at the end of the style block  
old_css_end = '.ar-r .ae-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}'
new_css_end = old_css_end + '.pdv-cover{width:100%;border-radius:12px;overflow:hidden;margin-bottom:20px;background:#f5f0eb;box-shadow:0 2px 12px rgba(0,0,0,.06)}.pdv-cover img{width:100%;display:block;max-height:360px;object-fit:contain}.pdv-btn{display:inline-flex;align-items:center;gap:6px;margin-top:16px;padding:10px 24px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;border:none;background:#c4835a;color:#fff;transition:background .25s}.pdv-btn:hover{background:#b07050}.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:1000;display:none;align-items:center;justify-content:center;padding:40px;cursor:pointer;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.modal-overlay.show{display:flex}.modal-overlay img{max-width:95%;max-height:92vh;object-fit:contain;border-radius:6px;box-shadow:0 8px 48px rgba(0,0,0,.5)}.modal-close{position:fixed;top:24px;right:32px;color:#fff;font-size:36px;cursor:pointer;z-index:1001;background:none;border:none;line-height:1;opacity:.8;transition:opacity .2s}.modal-close:hover{opacity:1}'
html = html.replace(old_css_end, new_css_end)
print("1. CSS updated")

# 2. Add cover div inside .pdv-body before tag
old_body = '<div class="pdv-body"><div class="pdv-tag" id="pPoTag"></div><h2 id="pPoTitle"></h2>'
new_body = '<div class="pdv-body"><div class="pdv-cover" id="pPoCover"></div><div class="pdv-tag" id="pPoTag"></div><h2 id="pPoTitle"></h2>'
html = html.replace(old_body, new_body)
print("2. Cover div added")

# 3. Add button after bg div and add modal overlay
# The bg ends with </div></div> then <div class="pdv-img"
# We need to add button before </div></div><div class="pdv-img"
old_bg = '<p id="pPoBg"></p></div></div><div class="pdv-img" id="pPoImg">'
new_bg = '<p id="pPoBg"></p></div><button class="pdv-btn" onclick="document.getElementById(\'pMo\').classList.add(\'show\')">📷 \u67e5\u770b\u5c55\u793a\u56fe</button></div><div class="pdv-img" id="pPoImg">'
html = html.replace(old_bg, new_bg)
print("3. Button added")

# 4. Add modal after the pdv section
old_po_end = '</div></div></div>'  # closes .pdv > .in > #pPo
# Find the right closing divs after pdv-img
old_po_img = '<div class="pdv-img" id="pPoImg"></div></div>'
new_po_img = '<div class="pdv-img" id="pPoImg"></div></div></div><div class="modal-overlay" id="pMo" onclick="closeModal()"><span class="modal-close">&times;</span><img id="pMoImg" src="" alt=""></div></div>'
html = html.replace(old_po_img, new_po_img)
print("4. Modal added")

# 5. Update showPoD
old_sp = 'function showPoD(i){ var p=Po[i]; if(!p.img&&!p.bi) return; document.getElementById("pG").style.display="none"; document.getElementById("pPoDv").classList.add("pdv-sel"); p.img&&(document.getElementById("pPoImg").innerHTML=\'<img src="\'+p.img+\'" alt="\'+p.t+\'" style="cursor:zoom-in" onclick="window.open(\\\'\'+p.img+\'\\\',\\\'\'_blank\\\'\\\')">\'); document.getElementById("pPoTag").textContent=p.c; document.getElementById("pPoTitle").textContent=p.t; document.getElementById("pPoBg").textContent=p.bi||"" }'
# Actually let me just do a simpler pattern match
if 'function showPoD(i){ var p=Po[i];' in html:
    print("5. Found showPoD, updating...")
    # Find the exact end of the function
    idx = html.index('function showPoD(i){ var p=Po[i];')
    end_idx = html.index('document.getElementById("pPoBg").textContent=p.bi||"" }', idx)
    end_idx += len('document.getElementById("pPoBg").textContent=p.bi||"" }')
    
    old_fn = html[idx:end_idx]
    new_fn = 'function showPoD(i){ var p=Po[i]; if(!p.img&&!p.bi) return; document.getElementById("pG").style.display="none"; document.getElementById("pPoDv").classList.add("pdv-sel"); document.getElementById("pPoTag").textContent=p.c; document.getElementById("pPoTitle").textContent=p.t; document.getElementById("pPoBg").textContent=p.bi||""; if(p.himg){document.getElementById("pPoCover").innerHTML=\'<img src="\'+p.himg+\'" alt="\'+p.t+\'">\'} document.getElementById("pMoImg").src=p.img||"" }'
    html = html[:idx] + new_fn + html[end_idx:]
    print("5. showPoD updated")
else:
    print("5. ERROR: showPoD not found")

# 6. Add closeModal after hidePoD
if 'function hidePoD()' in html:
    idx = html.index('function hidePoD()')
    end_idx = html.index('}', idx) + 1
    new_cm = ' function closeModal(){ document.getElementById("pMo").classList.remove("show") }'
    html = html[:end_idx] + new_cm + html[end_idx:]
    print("6. closeModal added")
else:
    print("6. ERROR: hidePoD not found")

with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("All done!")
