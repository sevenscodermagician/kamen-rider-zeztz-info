import os
import re

folder_path = os.getcwd()

# New CSS block
new_css_block = """.button {
  background-color: #00ff80;
  border: none;
  color: rgba(255, 0, 0, 0.897);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block; /* keeps normal button width */
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
}

.blog-container {
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  padding: 10px;
}"""

# Regex pattern to match from ".button {" to the end of ".blog-container { ... }"
pattern = re.compile(r"\.button\s*\{[\s\S]*?\.blog-container\s*\{[\s\S]*?\}", re.MULTILINE)

for root, dirs, files in os.walk(folder_path):
    for filename in files:
        if filename.lower().endswith(".html"):
            file_path = os.path.join(root, filename)

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Replace old CSS with new CSS
            if re.search(pattern, content):
                content = re.sub(pattern, new_css_block, content)
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Updated CSS in: {file_path}")

print("All files processed.")
