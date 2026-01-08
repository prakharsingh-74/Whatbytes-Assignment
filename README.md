# Whatbytes E-commerce Frontend

A modern, responsive e-commerce application built with Next.js, TypeScript, and Tailwind CSS.

![Whatbytes E-commerce](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss)

## 🚀 Live Demo

**Live URL**: [Coming Soon - Deploy to Vercel]

## ✨ Features

### 🏠 Home Page
- **Header**: Logo, search bar, cart icon with badge, and profile/avatar
- **Filters Sidebar**: 
  - Category filters (All, Electronics, Clothing, Home)
  - Price range slider (0-1000)
  - Real-time URL-based filtering
- **Product Grid**: 
  - Responsive layout (3 columns on desktop, 2 on tablet, 1 on mobile)
  - Product cards with images, titles, prices, ratings, and "Add to Cart" buttons
- **Search Functionality**: Real-time product search
- **Footer**: Copyright information and social media links

### 📦 Product Detail Page (`/product/[id]`)
- Large product image display
- Complete product information (title, price, description, category)
- Star rating display
- Quantity selector with increment/decrement buttons
- Add to Cart functionality
- Breadcrumb navigation

### 🛒 Cart Page (`/cart`)
- List of cart items with product images
- Quantity controls (update or remove items)
- Price summary (subtotal, tax, total)
- Empty cart state with call-to-action
- Persistent cart using localStorage

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API
- **Icons**: Lucide React
- **Image Generation**: AI-generated product images

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/whatbytes.git

# Navigate to project directory
cd whatbytes

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Key Features Implementation

### ✅ Filtering Logic
- Category filtering
- Price range filtering (0-1000)
- URL-based filters (e.g., `?category=Electronics&priceMax=500`)
- Search with string matching

### ✅ State Management
- Cart state managed with React Context API
- localStorage persistence for cart items
- Real-time cart count badge updates

### ✅ Routing
- Dynamic product detail pages (`/product/[id]`)
- Client-side navigation
- 404 handling for invalid products

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: mobile (1 col), tablet (2 cols), desktop (3 cols)
- Fully responsive filters and navigation

## 📁 Project Structure

```
whatbytes/
├── app/
│   ├── cart/
│   │   └── page.tsx          # Cart page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx      # Product detail page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Header with search and cart
│   ├── Footer.tsx            # Footer with links
│   ├── FiltersSidebar.tsx    # Filters component
│   ├── ProductCard.tsx       # Product card component
│   └── ProductGrid.tsx       # Product grid layout
├── context/
│   └── CartContext.tsx       # Cart state management
├── data/
│   └── products.ts           # Mock product data
├── lib/
│   └── utils.ts              # Utility functions
├── types/
│   └── index.ts              # TypeScript interfaces
└── public/
    └── images/               # Product images
```

## 🎨 Design Implementation

The UI closely matches the provided design specifications:
- **Primary Blue**: `#005bb5` (Header)
- **Secondary Blue**: `#1a5490` (Filters sidebar)
- **Dark Blue**: `#0a2540` (Cart button)
- **Button Blue**: `#0066cc` (Add to Cart buttons)

## 🔄 Git Workflow

This project follows best practices with **meaningful, incremental commits**:

```bash
✓ Initial Next.js setup with TypeScript, Tailwind CSS, and core data structures
✓ Add layout components (Header, Footer) and product images
✓ Add filters sidebar and product listing with search functionality
✓ Add product detail page and cart page with full functionality
✓ Final UI polish: updated sidebar design, added profile icon, and custom slider styles
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with default settings

```bash
# Build the production bundle
npm run build

# Start production server locally
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🧪 Testing Checklist

- [x] Home page loads with product grid
- [x] Category filters work correctly
- [x] Price filter updates products
- [x] Search functionality works
- [x] Product detail page displays all information
- [x] Quantity selector increments/decrements
- [x] Add to Cart adds items
- [x] Cart displays items correctly
- [x] Cart quantity controls work
- [x] Cart persists after page refresh
- [x] Responsive design on all screen sizes

## 👨‍💻 Developer Notes

- **Cart Persistence**: Uses `localStorage` to maintain cart state across sessions
- **URL State**: Filter and search states are synchronized with URL parameters
- **Image Optimization**: Uses Next.js `Image` component for optimized loading
- **Type Safety**: Full TypeScript coverage for all components

## 📄 License

This project is part of the Whatbytes Frontend Assignment.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
