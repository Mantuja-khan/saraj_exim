import os
from PIL import Image

out_dir = r"d:\New folder\public\images"

pouches_img = Image.open(os.path.join(out_dir, "pouches_lineup.jpg"))
pouch_crops = [
    ("pouch_almond.jpg", (55, 230, 315, 655)),
    ("pouch_cacao.jpg", (315, 230, 575, 655)),
    ("pouch_mango.jpg", (575, 230, 835, 655)),
    ("pouch_chickpeas.jpg", (835, 230, 1095, 655)),
    ("pouch_berry.jpg", (1095, 230, 1355, 655))
]

for name, box in pouch_crops:
    cropped = pouches_img.crop(box)
    cropped.save(os.path.join(out_dir, name), quality=95)
    print(f"Saved refined {name}")

ing_img = Image.open(os.path.join(out_dir, "ingredients_set.jpg"))
ing_crops = [
    ("ingredient_almonds.jpg", (70, 240, 360, 530)),
    ("ingredient_chia.jpg", (390, 220, 670, 600)),
    ("ingredient_dates.jpg", (700, 240, 970, 530)),
    ("ingredient_cacao.jpg", (1010, 240, 1300, 530))
]

for name, box in ing_crops:
    cropped = ing_img.crop(box)
    cropped.save(os.path.join(out_dir, name), quality=95)
    print(f"Saved refined {name}")

print("Refined cropping complete!")
