# Images Directory

This directory contains all static images for the website.

## Folder Structure

- `/logo/` - Company logos (logo.png, logo.svg, etc.)
- `/carousel/` - Images for the carousel/slider on the Features section
- `/icons/` - Icon images (if needed)
- `/general/` - Other general images used throughout the site

## How to Use Images

In Astro components, reference images from the `public` folder like this:

```astro
<!-- In .astro files -->
<img src="/images/logo/logo.png" alt="Logo" />

<!-- Or in React/TSX files -->
<img src="/images/carousel/image1.jpg" alt="Carousel image" />
```

**Note:** Always use `/images/...` (starting with `/`) - Astro serves files from the `public` folder at the root URL.

