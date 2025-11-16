# Image Placement Guide

This guide shows you where to place each image file in the `public/images` directory.

## Directory Structure

```
public/
└── images/
    ├── logo.png                    # Anclote Pharmacy logo (REQUIRED)
    ├── medications/
    ├── pharmacy/
    ├── services/
    └── equipment/
```

## Image Files Needed

### 1. Logo (REQUIRED)

**File:** `public/images/logo.png`
- **Description:** Anclote Pharmacy logo with "AP" monogram and "ANCLOTE PHARMACY" text
- **Used on:** Header (all pages)
- **Dimensions:** Recommended 200x200px or higher (will be scaled to 64x64px in header)
- **Format:** PNG with transparent background preferred

### 2. Home Page Images

**File:** `public/images/medications/health-pills.jpg`
- **Description:** "HEALTH" spelled with pills on yellow background
- **Used on:** Home page - Core Services section
- **Dimensions:** 1200x400px recommended

**File:** `public/images/pharmacy/pharmacy-customer.jpg`
- **Description:** Woman shopping in pharmacy/store
- **Used on:** Home page - Pharmacy Experience section
- **Dimensions:** 800x600px recommended

### 3. Pharmacy Services Page

**File:** `public/images/medications/pills-capsules.jpg`
- **Description:** Red gel capsules and black pills on a dish
- **Used on:** Pharmacy Services page
- **Dimensions:** Square format (aspect-square)

**File:** `public/images/medications/white-pills-grid.jpg`
- **Description:** White pills in grid pattern on pink background
- **Used on:** Pharmacy Services page
- **Dimensions:** Square format (aspect-square)

### 4. Immunizations Page

**File:** `public/images/services/syringe-medical.jpg`
- **Description:** Syringe with blue liquid and medical items
- **Used on:** Immunizations page
- **Dimensions:** 1200x600px recommended

### 5. Multi-Dose Packaging Page

**File:** `public/images/medications/pill-organizer.jpg`
- **Description:** Pill organizer with colorful pills on purple background
- **Used on:** Multi-Dose Packaging page
- **Dimensions:** 1200x600px recommended

### 6. Medication Adherence Page

**File:** `public/images/medications/white-pills-grid.jpg`
- **Description:** White pills in grid pattern on pink background
- **Used on:** Medication Adherence page
- **Dimensions:** 1200x600px recommended
- **Note:** Same image as Pharmacy Services (can reuse)

### 7. Medication Therapy Management Page

**File:** `public/images/services/pharmacy-lab.jpg`
- **Description:** Chemistry experiment with test tubes
- **Used on:** Medication Therapy Management page
- **Dimensions:** 1200x600px recommended

### 8. Durable Medical Equipment Page

**File:** `public/images/equipment/medical-equipment.jpg`
- **Description:** Medical equipment (walkers, wheelchairs, etc.)
- **Used on:** Durable Medical Equipment page
- **Dimensions:** 1200x600px recommended

### 9. About Page

**File:** `public/images/pharmacy/pharmacy-customer.jpg`
- **Description:** Woman shopping in pharmacy/store
- **Used on:** About page
- **Dimensions:** 1200x600px recommended
- **Note:** Same image as Home page (can reuse)

## Quick Setup Instructions

1. **Create the directories:**
   ```bash
   mkdir -p public/images/{medications,pharmacy,services,equipment}
   ```

2. **Place your images:**
   - Save each image with the exact filename listed above
   - Place them in the corresponding directory
   - **IMPORTANT:** Add your logo as `public/images/logo.png`

3. **Image Requirements:**
   - Format: JPG or PNG
   - Optimize images for web (compress before uploading)
   - Recommended: Use tools like TinyPNG or ImageOptim
   - Logo should have transparent background if possible

## Image Sources

If you need to find pharmacy-related images, here are some free resources:

- **Unsplash** (unsplash.com) - Search for "pharmacy", "medication", "pills"
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free images

## Notes

- All images are optimized using Next.js Image component
- Images will automatically be lazy-loaded for better performance
- If an image is missing, the page will still work (just won't show the image)
- Make sure image filenames match exactly (case-sensitive)
- **The logo is required** - the header will show a placeholder if missing
