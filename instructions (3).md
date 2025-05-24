Use the following instructions to build a modern restaurant website.

- Next.js Version: 13.4.12 (specific version to avoid hydration issues)
- React: 18.2.0
- Node.js: >=14.x
- Package Manager: npm (not yarn)

  Install the following dependencies:

```bash
npm install autoprefixer@^10.0.0 \
            lucide-react@^0.244.0 \
            next@13.4.12 \
            postcss@^8.4.0 \
            react@18.2.0 \
            react-dom@18.2.0 \
            tailwindcss@^3.2.0
```

## Technical Foundation

### 1. Project Architecture

```
/
├── components/          # Reusable UI components
├── pages/              # Next.js pages and routing
├── public/             # Static assets
├── styles/            # Global styles and Tailwind
└── utils/             # Helper functions if needed
```

3. Configuration Files Setup:

- Create `next.config.js` for image domains
- Setup `tailwind.config.js` with custom theme
- Configure `postcss.config.js`
- Add global styles in `styles/globals.css`

### 4. Key Technical Considerations

3. **Responsive Design**

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

4. **State Management**

- Use React hooks for local state
- Implement context for theme/global states
- Avoid unnecessary re-renders

5. **Animation Implementation**

- Use CSS transitions for simple animations
- Implement smooth scroll behavior
- Add hover effects using Tailwind
- Transition timings example:
  ```css
  transition-duration: 300ms
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
  ```

### 5. Development Best Practices

1. **Code Organization**

- Keep components small and focused
- Use consistent file naming
- Implement proper commenting
- Follow DRY principle

2. **Styling Methodology**

- Use Tailwind utility classes
- Implement consistent spacing
- Follow color system
- Maintain responsive design patterns

3. **Performance Considerations**

- Minimize third-party dependencies
- No Typescript

4. **Image Optimization**

- Next.js Image component usage throughout the app
- Remote domains configured in next.config.js for freepik.com
- Gradient overlays for text contrast
- Priority loading for hero first image

5. **Layout Optimization**

- Responsive grid layouts (1 column mobile, 3 columns desktop)
- Tailwind's container class for consistent spacing
- Mobile-first approach with md: breakpoint
- Proper spacing units through Tailwind classes

6. **Component Structure**

- Modular component architecture
- Reusable button styles
- Consistent styling patterns
- Clean component hierarchy

## Components Architecture

### 1. HeroSlider Component

Purpose: Create a full-screen image slider with overlay text and CTA buttons.

Requirements:

- Use Next.js Image component for optimization
- Implement auto-rotating slides (5-second intervals)
- Include overlay gradient for text contrast
- Add navigation dots
- Smooth transitions between slides

Key Features:

- Full viewport height
- Gradient overlay (black to transparent)
- Centered text content
- CTA buttons with hover effects
- Slide indicators

Animation Specifications:

- Slide transition duration: 500ms
- Fade effect with ease-in-out
- Button hover scale: 1.02

Reference Implementation:

### 2. StorySection Component

Purpose: Display restaurant's history with an engaging image and story.

Requirements:

- Two-column layout (mobile responsive)
- Custom button with shadow effect
- Image hover animation
- Gradient overlay on image

Key Features:

- Split layout (text/image)
- Decorative border accents
- Custom animated button
- Image hover zoom effect

Styling Notes:

- Use accent colors for text highlights
- Implement before/after pseudo-elements for button effects
- Add shadow effects on hover
- Maintain consistent spacing

Reference Implementation:

### 3. ReviewSection Component

Purpose: Display customer testimonials in a grid layout.

Requirements:

- Create a reviews data array with name, review text, and rating
- Implement responsive grid layout (1 column mobile, 3 columns desktop)
- Add hover animations for cards
- Include star rating display

Key Features:

- Review cards with hover scaling (1.05)
- Left border accent on review text
- Top border separator for author info
- Star rating using repeated ★ character

Styling Notes:

- Card background: light color
- Text color: dark color
- Border accents: accent colors
- Transition duration: 300ms

### 4. Menu Page Component

Purpose: Display restaurant menu items in an attractive grid layout.

Requirements:

- Create menuItems array with name, description, price, image, and tag
- Implement responsive grid (1 column mobile, 2 columns desktop)
- Add image hover effects
- Include order buttons

Key Features:

- Menu item cards with hover scaling
- Image zoom on hover
- Tag badges
- Custom animated order buttons
- Price in euros display with accent color

Animation Specifications:

- Card hover scale: 1.05
- Image hover scale: 1.10
- Button hover effect: offset shadow
- Transition durations: 300-500ms

### 5. Navigation Component

Purpose: Provide consistent navigation across all pages.

Requirements:

- Sticky positioning
- Transparent to solid background on scroll
- Mobile responsive menu
- Smooth scroll for anchor links

Key Features:

- Logo (see Logo Component section)
- Navigation links with underline animation
- Mobile hamburger menu
- Background transition on scroll

Animation Specifications:

- Background transition: 300ms
- Link hover effect: 200ms
- Mobile menu transition: 300ms

### 6. Footer Component

Purpose: Display contact information and social links.

Requirements:

- Responsive layout
- Social media icons
- Copyright information
- Quick links

Key Features:

- Social icons from Lucide React
- Hover effects on links
- Responsive columns
- Brand logo

Styling Notes:

- Dark background
- Light text
- Accent colors for hover states
- Consistent spacing with main content

### 7. Logo Component

Purpose: Create a distinctive, layered text logo that serves as the brand identifier.

Requirements:

- Container Design:
  - Yellow background (#F4D03F)
  - Subtle rounded corners
  - Responsive padding (px-6 py-3)
  - Scale effect on hover (1.05)

Typography Specifications:

- Font: Lilita One (Google Fonts)
- Letter spacing: 0.2em
- Text size: 24px (text-2xl)
- Case: All uppercase
- Word spacing: gap-2

Layered Text Effect:

- Front layer: Light white text
- Back layer: Black shadow text
- Shadow offset: -4px left, -4px bottom
- Z-index management for proper layering

Animation Specifications:

- Hover scale: 1.05
- Transition duration: 300ms
- Smooth easing function
- Group hover implementation

Key Features:

- Three-word structure with consistent gaps
- Double-layered text for depth
- Interactive hover state
- Responsive scaling
- Proper contrast ratio

Styling Notes:

- Maintain consistent shadow offset
- Ensure proper spacing between words
- Keep container padding proportional
- Implement smooth transitions

## Asset Configuration

### 1. Image Assets

#### Hero Slider Images

```
- Image 1: https://img.freepik.com/photos-gratuite/trois-amis-ensemble-manger-pizza-dans-cafe_1303-26152.jpg
- Image 2: https://img.freepik.com/photos-gratuite/pizza-pepperoni-table_140725-5396.jpg
- Image 3: https://img.freepik.com/photos-premium/pizza-fraichement-cuite-champignons-pepperoni-olives-du-basilic_715003-13553.jpg
```

#### Story Section Image

```
https://img.freepik.com/photos-gratuite/ancien-chef-pizzeria-portrait-realiste-du-chef-au-travail-livrant-pizzas-fraiches-i_166373-6607.jpg
```

### 2. Color System

```css
:root {
  --primary-color: #cd291e; /* Accent Red */
  --secondary-color: #fdb912; /* Accent Yellow */
  --light-color: #fff9ee; /* Light White */
  --dark-color: #231f20; /* Custom Grey */
  --accent-color: #316131; /* Dark Green */
}
```

Usage in Tailwind:

```javascript:tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        "accent-red": "#CD291E",
        "accent-yellow": "#FDB912",
        "light-white": "#FFF9EE",
        "custom-grey": "#231F20",
        "dark-green": "#316131",
      }
    }
  }
}
```

### 3. Image Configuration

Add to next.config.js:

```javascript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "img.freepik.com",
    },
  ],
}
```
