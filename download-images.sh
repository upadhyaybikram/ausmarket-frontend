#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download hero image
curl -o public/images/hero-bg.jpg "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"

# Download category images
curl -o public/images/electronics.jpg "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
curl -o public/images/fashion.jpg "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
curl -o public/images/home-living.jpg "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80"
curl -o public/images/sports.jpg "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"

# Download product images
curl -o public/images/product1.jpg "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
curl -o public/images/product2.jpg "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
curl -o public/images/product3.jpg "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
curl -o public/images/product4.jpg "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"

echo "Images downloaded successfully!" 