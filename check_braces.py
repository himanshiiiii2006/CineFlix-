import re

html_path = r"C:\Users\himan\.gemini\antigravity\scratch\cineflix-ai\index.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract script blocks
scripts = re.findall(r"<script>(.*?)</script>", content, re.DOTALL)
large_script = scripts[1]

def check_braces(code):
    stack = []
    lines = code.split("\n")
    for i, line in enumerate(lines):
        for char in line:
            if char in "{[(":
                stack.append((char, i+1))
            elif char in "}])":
                if not stack:
                    print(f"Extra closing character '{char}' at line {i+1}")
                    return False
                top_char, top_line = stack.pop()
                if (char == "}" and top_char != "{") or \
                   (char == "]" and top_char != "[") or \
                   (char == ")" and top_char != "("):
                    print(f"Mismatch: '{top_char}' from line {top_line} closed by '{char}' at line {i+1}")
                    return False
    if stack:
        print(f"Unclosed openings left:")
        for char, line in stack[-5:]:
            print(f"  '{char}' at line {line}")
        return False
    print("All braces/brackets match perfectly!")
    return True

check_braces(large_script)
