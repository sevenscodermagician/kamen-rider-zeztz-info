import os


folder_path = os.getcwd()

old_html_line = '''.button {
  background-color: #00ff80;
  border: none;
  color: rgba(255, 0, 0, 0.897);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block; 
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease;
}

.button:hover {
  background-color: #00cc66;
  transform: translateY(-3px) scale(1.05); /* pop-up hover */
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}'''
new_html_line = '''.button {
  background-color: #00ff80;
  border: none;
  color: rgba(255, 0, 0, 0.897);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block; 
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease;
}

.button:hover {
  background-color: #00cc66;
  transform: translateY(-3px) scale(1.05); 
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}'''

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