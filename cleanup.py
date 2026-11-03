import os

# Read current file
with open('w:\\work\\shotgun-template\\src\\App.tsx', 'r') as f:
    lines = f.readlines()

# Filter out duplicate lines and keep only the first occurrence
seen = set()
filtered = []
for line in lines:
    if line not in seen:
        seen.add(line)
        filtered.append(line)

# Write cleaned file
with open('w:\\work\\shotgun-template\\src\\App.tsx', 'w') as f:
    f.writelines(filtered)

print('Duplicates removed,', len(filtered), 'lines remaining')