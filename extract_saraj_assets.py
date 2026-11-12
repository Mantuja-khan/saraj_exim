import os
import shutil
from PIL import Image

saraj_dir = r"d:\New folder\public\images\saraj"
os.makedirs(saraj_dir, exist_ok=True)

user_dir = r"C:\Users\NUR MIYAN\.gemini\antigravity-ide\brain\d02cc864-e68e-4595-bcdd-d06882d08c3b\.user_uploaded"
hero_src = os.path.join(user_dir, "media_1793447122117.jpg")
why_src = os.path.join(user_dir, "media_1793447238342.jpg")
full_page_src = os.path.join(user_dir, "media_1793446983637.png")

shutil.copy2(hero_src, os.path.join(saraj_dir, "hero_bg.jpg"))
shutil.copy2(why_src, os.path.join(saraj_dir, "why_choose_us.jpg"))
print("Copied hero_bg.jpg and why_choose_us.jpg")

page = Image.open(full_page_src)
pw, ph = page.size

# Let's crop the logo from top left: y ~ 5 to 35, x ~ 25 to 65
logo = page.crop((20, 5, 68, 36))
logo.save(os.path.join(saraj_dir, "saraj_logo.png"))
print("Saved saraj_logo.png")

# In 389 width, let's find the products row:
# The products title 'Popular Herbal Powders' is at approx y 340-360
# The 7 pouches start at approx y 385 to 455
# Let's slice y around 380 to 460
pouches_strip = page.crop((0, 380, 389, 458))
pouches_strip.save(os.path.join(saraj_dir, "pouches_strip.png"))

# 7 products across 389 px:
# Each product is approximately 389 / 7 = 55.5 px wide, with padding
p_names = [
    "neem_powder.png",
    "moringa_powder.png",
    "camphor_powder.png",
    "wheatgrass_powder.png",
    "chilli_powder.png",
    "shatavari_powder.png",
    "jatamansi_powder.png"
]

step = 389.0 / 7.0
for i, name in enumerate(p_names):
    left = int(i * step)
    right = int((i + 1) * step)
    p_img = page.crop((left + 2, 380, right - 2, 455))
    # Resize up cleanly with Lanczos for sharp display
    p_img_hd = p_img.resize((p_img.width * 3, p_img.height * 3), Image.LANCZOS)
    p_img_hd.save(os.path.join(saraj_dir, name))
    print(f"Saved {name}")

# Now categories row:
# Around y 760 to 805
cat_names = [
    "cat_immunity.png",
    "cat_detox.png",
    "cat_respiratory.png",
    "cat_womens.png",
    "cat_culinary.png",
    "cat_mental.png"
]
cat_step = 389.0 / 6.0
for i, name in enumerate(cat_names):
    left = int(i * cat_step)
    right = int((i + 1) * cat_step)
    c_img = page.crop((left + 2, 755, right - 2, 805))
    c_img_hd = c_img.resize((c_img.width * 3, c_img.height * 3), Image.LANCZOS)
    c_img_hd.save(os.path.join(saraj_dir, name))
    print(f"Saved {name}")

# Also bottom banner 3 pouches:
bottom_banner = page.crop((180, 850, 380, 965))
bottom_banner.save(os.path.join(saraj_dir, "bottom_pouches.png"))
print("Done cropping SARAJ assets!")
