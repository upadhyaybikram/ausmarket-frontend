# AusMarket Frontend

A modern e-commerce platform built with Next.js, featuring a responsive design and seamless shopping experience.

## Features

- 🛍️ Product browsing and categorization
- 🔍 Dynamic product search and filtering
- 📱 Responsive design for all devices
- 🎨 Modern UI with smooth transitions
- 🏷️ Special offers and promotions section
- 📦 Category-based product organization

## Tech Stack

- **Framework:** Next.js 15.2.0
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Image Optimization:** Next.js Image Component
- **Development Server:** Turbopack

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ausmarket-frontend.git
cd ausmarket-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Download required images:

```bash
chmod +x download-images.sh
./download-images.sh
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
ausmarket-frontend/
├── public/
│   └── images/          # Static images
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── products/   # Products pages
│   │   ├── category/   # Category pages
│   │   └── offers/     # Offers pages
│   └── components/     # Reusable components
└── package.json
```

## Pages

- **Home (/)**: Landing page with featured products and categories
- **Products (/products)**: Browse all products with filters
- **Categories (/category/[slug])**: Category-specific product listings
- **Offers (/offers)**: Special deals and promotions

## Development

### Code Style

- Use TypeScript for type safety
- Follow Next.js best practices
- Use CSS Modules for styling
- Implement responsive design
- Optimize images using Next.js Image component

### Best Practices

- Write semantic HTML
- Ensure accessibility
- Optimize performance
- Follow component-based architecture
- Implement proper error handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Unsplash for the product images
- React community for inspiration and support
