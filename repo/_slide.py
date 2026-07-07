with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    c = f.read()

# 1. Slide CSS after modal CSS  
old1 = '.modal-close:hover{opacity:1}'
new1 = '.modal-close:hover{opacity:1}.pdv-slide{max-height:0;overflow:hidden;transition:max-height .5s ease}.pdv-slide.open{max-height:20000px}.pdv-slide-inner{padding-top:24px}.pdv-slide-inner img{width:100%;display:block;border-radius:12px;box-shadow:0 2px 16px rgba(0,0,0,.08)}@media(max-width:700px){.pdv-slide-inner img{border-radius:8px}}'
c = c.replace(old1, new1)
print("1 OK")

# 2. Button onclick change - use toggleSlide
c = c.replace('onclick=\"document.getElementById(\\'pMo\\').classList.add(\\'show\\')\"', 'onclick=\"toggleSlide()\"')
print("2 OK")

# 3. Add slide HTML
c = c.replace('</div><div class=\"pdv-img\" id=\"pPoImg\">', '</div><div class=\"pdv-slide\" id=\"pPoSlide\"><div class=\"pdv-slide-inner\"><img id=\"pPoSlideImg\" src=\"\" alt=\"\"></div></div><div class=\"pdv-img\" id=\"pPoImg\">')
print("3 OK")

# 4. Update showPoD for slide
c = c.replace('document.getElementById(\"pMoImg\").src=p.img||\"\"', 'document.getElementById(\"pMoImg\").src=p.img||\"\"; document.getElementById(\"pPoSlideImg\").src=p.img||\"\"')
print("4 OK")

# 5. Simple toggle function
old_tog = 'function closeModal(){ document.getElementById(\"pMo\").classList.remove(\"show\") }'
new_tog = 'function closeModal(){ document.getElementById(\"pMo\").classList.remove(\"show\") } function toggleSlide(){ var s=document.getElementById(\"pPoSlide\"); var b=s.parentElement.querySelector(\".pdv-btn\"); if(!s||!b)return; s.classList.toggle(\"open\"); if(s.classList.contains(\"open\")){b.innerHTML=\"\u6536\u8d77 / Collapse <svg\"+b.innerHTML.split(\"<svg\")[1]}else{b.innerHTML=\"\u67e5\u770b\u5b8c\u6574\u4f5c\u54c1 / View Full Work <svg\"+b.innerHTML.split(\"<svg\")[1]}; setTimeout(function(){s.scrollIntoView({behavior:\"smooth\",block:\"nearest\"})},50) }'
c = c.replace(old_tog, new_tog)
print("5 OK")

with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "w", encoding="utf-8") as f:
    f.write(c)
print("Done")
