# 🎧 Audiophile E-commerce Website

A modern, responsive e-commerce website for premium audio equipment built with React, Vite, and Tailwind CSS. This project features a complete product collection with detailed product pages, shopping functionality, and a beautiful user interface.

## Features

### **Fully Responsive Mobile-First Design**

- Mobile-first approach with responsive breakpoints
- Optimized for desktop, tablet, and mobile devices
- Modern UI/UX following the original Figma design

### **Complete E-commerce Functionality**

- **Product Categories**: Headphones, Speakers, and Earphones
- **Product Detail Pages**: Comprehensive product information with:
  - High-quality product images and galleries
  - Detailed specifications and features
  - "In the Box" item listings
  - Related product recommendations
- **Shopping Cart**: Global cart state management with:
  - Add/remove items functionality
  - Real-time cart badge updates
  - Persistent cart modal
  - Cart item quantity management
- **User Experience Enhancements**:
  - Add-to-cart notification popup
  - Form validation and feedback
  - Smooth transitions and animations
- **Checkout Process**: Complete checkout flow with:
  - Billing and shipping forms
  - Payment method selection (e-Money/Cash on Delivery)
  - Order summary and confirmation
  - Order confirmation modal

### **Advanced Navigation**

- React Router DOM for seamless page transitions
- Dynamic navigation with category-specific styling
- Home page navigation overlay with hero background
- Breadcrumb navigation and "Go Back" functionality
- Shopping cart integration with item count badge

### **Modern Design System**

- Custom Button component with multiple variants
- Consistent color scheme with brand orange (#D87D4A)
- Typography and spacing following design specifications
- Category cards with interactive hover effects

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Language**: JavaScript (JSX)

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://githubToken@github.com/yourusername/audiophile-ecommerce.git
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

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Main navigation component
│   ├── Hero.jsx        # Homepage hero section
│   ├── ProductDetail.jsx # Product detail page template
│   ├── ProductList.jsx  # Product listing component
│   ├── CategoryCards.jsx # Category navigation cards
│   ├── CartModal.jsx   # Shopping cart modal
│   ├── AddToCartNotification.jsx # Add-to-cart feedback
│   ├── Button.jsx      # Custom button component
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Headphones.jsx  # Headphones category page
│   ├── Speakers.jsx    # Speakers category page
│   ├── Earphone.jsx    # Earphones category page
│   ├── Checkout.jsx    # Checkout page
│   └── [Product].jsx   # Individual product pages
├── context/            # React Context providers
│   └── CartContext.jsx # Global cart state management
├── assets/             # Static assets (images, icons)
├── data.js            # Product data and content
└── App.jsx            # Main app component with routing
```

## Key Pages

### **Homepage**

- Hero section with featured product and overlay navigation
- Category navigation cards
- Featured products showcase
- About section and footer

### **Category Pages**

- **Headphones**: XX99 Mark II, XX99 Mark I, XX59
- **Speakers**: ZX9, ZX7
- **Earphones**: YX1 Wireless

### **Product Detail Pages**

Each product page includes:

- Large product images with gallery
- Comprehensive product descriptions
- Features and specifications
- "In the Box" contents
- Related product recommendations
- Quantity selector and add-to-cart functionality
- Add-to-cart success notification

### **Shopping & Checkout**

- **Cart Modal**: View cart items, adjust quantities, see totals
- **Checkout Page**: Complete form with billing, shipping, and payment
- **Order Confirmation**: Success modal with order summary

## Design Features

- **Color Palette**: Premium black, white, and brand orange
- **Typography**: Modern, clean font hierarchy
- **Layout**: Grid-based responsive layout system
- **Interactions**: Smooth hover effects and transitions
- **Images**: Optimized product photography
- **UX Enhancements**: Loading states, success notifications, form validation

## Recent Updates

### ✅ Completed Features

- **Shopping Cart System**: Global cart state with Context API
- **Add-to-Cart Notifications**: User feedback with popup notifications
- **Navigation Improvements**: Home page navigation overlay with hero background
- **Checkout Process**: Complete checkout form with validation and confirmation
- **Image Optimization**: All product images properly configured for Vite
- **User Experience**: Enhanced feedback and interactive elements

### 🚀 Next Steps

- **Tablet Responsiveness**: Optimize layout for tablet screens (768px-1024px)
- **Mobile Responsiveness**: Complete mobile optimization (below 768px)
- **Performance Optimization**: Image lazy loading and performance improvements
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Testing**: Unit tests and integration tests for key functionality

## Getting Started

Run the development server:

```bash
npm run dev
```

Or use the PowerShell script:

```powershell
.\start-dev.ps1
```

## Author

**Cilla Azil**

---
