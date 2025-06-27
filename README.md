# 🎧 Audiophile E-commerce Website

A modern, responsive e-commerce website for premium audio equipment built with React, Vite, and Tailwind CSS. This project features a complete product catalog with detailed product pages, shopping functionality, and a beautiful user interface.

## 🌟 Features

### 📱 **Fully Responsive Design**

- Mobile-first approach with responsive breakpoints
- Optimized for desktop, tablet, and mobile devices
- Modern UI/UX following the original Figma design

### 🛍️ **Complete E-commerce Functionality**

- **Product Categories**: Headphones, Speakers, and Earphones
- **Product Detail Pages**: Comprehensive product information with:
  - High-quality product images and galleries
  - Detailed specifications and features
  - "In the Box" item listings
  - Related product recommendations
- **Interactive Elements**: Quantity selectors and add-to-cart functionality

### 🧭 **Advanced Navigation**

- React Router DOM for seamless page transitions
- Dynamic navigation with category-specific styling
- Breadcrumb navigation and "Go Back" functionality

### 🎨 **Modern Design System**

- Custom Button component with multiple variants
- Consistent color scheme with brand orange (#D87D4A)
- Typography and spacing following design specifications
- Category cards with interactive hover effects

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Language**: JavaScript (JSX)

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/audiophile-ecommerce.git
   cd audiophile-ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Main navigation component
│   ├── Hero.jsx        # Homepage hero section
│   ├── ProductDetail.jsx # Product detail page template
│   ├── ProductList.jsx  # Product listing component
│   ├── CategoryCards.jsx # Category navigation cards
│   ├── Button.jsx      # Custom button component
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Headphones.jsx  # Headphones category page
│   ├── Speakers.jsx    # Speakers category page
│   ├── Earphone.jsx    # Earphones category page
│   └── [Product].jsx   # Individual product pages
├── assets/             # Static assets (images, icons)
├── data.js            # Product data and content
└── App.jsx            # Main app component with routing
```

## 🎯 Key Pages

### 🏠 **Homepage**

- Hero section with featured product
- Category navigation cards
- Featured products showcase
- About section and footer

### 📱 **Category Pages**

- **Headphones**: XX99 Mark II, XX99 Mark I, XX59
- **Speakers**: ZX9, ZX7
- **Earphones**: YX1 Wireless

### 🔍 **Product Detail Pages**

Each product page includes:

- Large product images with gallery
- Comprehensive product descriptions
- Features and specifications
- "In the Box" contents
- Related product recommendations
- Quantity selector and purchase options

## 🎨 Design Features

- **Color Palette**: Premium black, white, and brand orange
- **Typography**: Modern, clean font hierarchy
- **Layout**: Grid-based responsive layout system
- **Interactions**: Smooth hover effects and transitions
- **Images**: Optimized product photography

## 👨‍💻 Author

**Cilla Azil**

- Email: azilafupriscilla@gmail.com

---

⭐ **Star this repository if you found it helpful!**

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
