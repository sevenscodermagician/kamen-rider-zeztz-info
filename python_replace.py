import os

folder_path = os.getcwd()

# Old and new lines
old_line_1 = 'Masekd'
new_line_1 = 'Masked'

old_line_2 = ''
new_line_2 = ''

for root, dirs, files in os.walk(folder_path):
    for filename in files:
        if filename.lower().endswith(".html"):
            file_path = os.path.join(root, filename)

            # Read file
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            original_content = content

            # Replace both cases
            content = content.replace(old_line_1, new_line_1)
            content = content.replace(old_line_2, new_line_2)

            # Only write if changes were made
            if content != original_content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)

                print(f"Updated: {file_path}")

print("All files processed.")