import os


folder_path = os.getcwd()

old_html_line = '''<html id="html" lang="en" style="
    background: linear-gradient(125deg, rgb(255, 240, 212), #f5ac71);
    text-align: center;
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    color: #333;
    line-height: 1.6;
    padding: 20px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
"
'''
new_html_line = '''<html id="html" lang="en" style="
    background: linear-gradient(125deg, rgb(255, 240, 212), #f5ac71);
    text-align: center;
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    color: #333;
    line-height: 1.6;
    padding: 20px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
">

'''

for root, dirs, files in os.walk(folder_path):
    for filename in files:
        if filename.lower().endswith(".html"):
            file_path = os.path.join(root, filename)
            
            # Read file
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Replace line
            if old_html_line in content:
                content = content.replace(old_html_line, new_html_line)
                
                # Write back
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                
                print(f"Updated: {file_path}")

print("All files processed.")