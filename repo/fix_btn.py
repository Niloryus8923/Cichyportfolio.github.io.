with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "r", encoding="utf-8") as f:
    c = f.read()

# Build the two SVG states  
svg_right = '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" style=\"vertical-align:middle;flex-shrink:0;margin-left:auto\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#fff\"/><path d=\"M9 18l6-6-6-6\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>'
svg_down = '<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" style=\"vertical-align:middle\"><circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#fff\"/><path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>'

# Replace the toggleSlide function  
old_fn = 'function toggleSlide(){ var s=document.getElementById(\"pPoSlide\"); if(!s)return; s.classList.toggle(\"open\"); var svg=document.querySelector(\".pdv-btn svg\");if(!svg)return; var svgHTML=svg.outerHTML; var btn=document.querySelector(\".pdv-btn\");if(!btn)return; if(s.classList.contains(\"open\")){btn.innerHTML=\"\u6536\u8d77 / Collapse \"+svgHTML}else{btn.innerHTML=\"\u67e5\u770b\u5b8c\u6574\u4f5c\u54c1 / View Full Work \"+svgHTML};setTimeout(function(){s.scrollIntoView({behavior:\"smooth\",block:\"nearest\"})},50) }'

new_fn = 'function toggleSlide(){ var s=document.getElementById(\"pPoSlide\");if(!s)return;s.classList.toggle(\"open\");var btn=document.querySelector(\".pdv-btn\");if(!btn)return;if(s.classList.contains(\"open\")){btn.style.minWidth=\"\";btn.style.padding=\"8px\";btn.style.borderRadius=\"50%\";btn.style.justifyContent=\"center\";btn.innerHTML=\"' + svg_down + '\"}else{btn.style.minWidth=\"\";btn.style.padding=\"\";btn.style.borderRadius=\"\";btn.style.justifyContent=\"\";btn.innerHTML=\"\u67e5\u770b\u5b8c\u6574\u4f5c\u54c1 / View Full Work '+ svg_right + '\"};setTimeout(function(){s.scrollIntoView({behavior:\"smooth\",block:\"nearest\"})},50) }'

c = c.replace(old_fn, new_fn)

with open("C:/Users/11361/Documents/个人网站 3/repo/index.html", "w", encoding="utf-8") as f:
    f.write(c)
print("Done")
