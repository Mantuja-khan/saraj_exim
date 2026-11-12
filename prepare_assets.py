import os
import shutil
from PIL import Image

artifacts_dir = r"C:\Users\NUR MIYAN\.gemini\antigravity-ide\brain\d02cc864-e68e-4595-bcdd-d06882d08c3b"
out_dir = r"d:\New folder\public\images"
os.makedirs(out_dir, exist_ok=True)

files_map = {
    "hero.jpg": "hero_snack_table_1793444969725.jpg",
    "lifestyle.jpg": "lifestyle_woman_snack_1793444987468.jpg",
    "nutrition_guide.jpg": "nutrition_guide_bowl_1793445002971.jpg",
    "box_energy.jpg": "snack_box_energy_1793445022653.jpg",
    "box_immunity.jpg": "snack_box_immunity_1793445045108.jpg",
    "box_essentials.jpg": "snack_box_essentials_1793445066480.jpg",
    "pouches_lineup.jpg": "snack_pouches_lineup_1793445089227.jpg",
    "ingredients_set.jpg": "ingredients_spotlight_set_1793445113065.jpg",
}

for dest, src in files_map.items():
    src_path = os.path.join(artifacts_dir, src)
    dest_path = os.path.join(out_dir, dest)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src} -> {dest}")

# Crop the 5 pouches
pouches_img = Image.open(os.path.join(out_dir, "pouches_lineup.jpg"))
pw, ph = pouches_img.size
# 5 pouches evenly spaced horizontally
pouch_names = [
    "pouch_almond.jpg",
    "pouch_cacao.jpg",
    "pouch_mango.jpg",
    "pouch_chickpeas.jpg",
    "pouch_berry.jpg"
]

step = pw / 5.0
for i, name in enumerate(pouch_names):
    left = int(i * step)
    right = int((i + 1) * step)
    # add small margin or keep whole height
    box = (left, int(ph * 0.2), right, int(ph * 0.95))
    cropped = pouches_img.crop(box)
    cropped.save(os.path.join(out_dir, name), quality=92)
    print(f"Saved {name}")

# Crop the 4 ingredients
ing_img = Image.open(os.path.join(out_dir, "ingredients_set.jpg"))
iw, ih = ing_img.size
ing_names = [
    "ingredient_almonds.jpg",
    "ingredient_chia.jpg",
    "ingredient_dates.jpg",
    "ingredient_cacao.jpg"
]
istep = iw / 4.0
for i, name in enumerate(ing_names):
    left = int(i * istep)
    right = int((i + 1) * istep)
    box = (left, int(ih * 0.2), right, int(ih * 0.85))
    cropped = ing_img.crop(box)
    cropped.save(os.path.join(out_dir, name), quality=92)
    print(f"Saved {name}")

print("All assets prepared successfully!")
