import os
folder_path = os.getcwd()

old_html_line = '''<a href="nox_knight_forms.html" style="background-color: white; color: gold;" class="button ">Nox Knight forms</a>'''
new_html_line = '''<a href="nox_knight_forms.html" style="background-color: white; color: gold;" class="button ">Nox forms</a>'''

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