网站备份说明
============
备份时间: 2026/6/29
备份原因: 之前网站出现了一系列问题，现已修复

文件说明:
--------
index_fixed.html                - 修复后的主页面(编码正确、JS语法已修复)
test_screenshot_encoding_ok.html - 模板源文件(编码正确的版本)
server_v2.js                    - 修复后的Node.js服务器(监听0.0.0.0:8894)
server.js                       - 原始Node.js服务器(备选)
serve.py                        - Python版本服务器(备选)
apply_fixes.py                  - 修复工具脚本
fix_js_syntax_applyed.py         - JS语法修复脚本

使用方式:
--------
启动服务器:   cd repo && node server_v2.js
浏览器访问:   http://localhost:8894/

常见问题解决:
--------
1. 页面打不开 → 检查服务是否在运行，端口是否被占用
2. 文字乱码 → 中文字符需用UTF-8编码保存
3. 页面不跳转 → index_fixed.html已修复JS语法错误
