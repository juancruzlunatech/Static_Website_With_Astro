# 🍖 Argentine Recipes

A traditional Argentine recipes website built with **Astro**, featuring authentic flavors of Argentine cuisine with multilingual support (Spanish and English).

🌍 **Live Demo**: https://juancruzlunatech.github.io/AnygravityTest/

## ✨ Features

- 🌍 **Multilingual**: Full support for Spanish and English with language switcher
- 🎨 **Modern Design**: Attractive interface with dark theme and smooth animations
- 🔍 **Detailed Recipes**: Complete information on ingredients, steps and preparation time
- 📱 **Responsive**: Optimized for mobile and desktop devices
- ⚡ **High Performance**: Built with Astro for maximum speed and minimal JavaScript
- 🚀 **GitHub Pages Ready**: Deploys directly to GitHub Pages from the main branch

## 🍽️ Included Recipes

- **Empanadas Tucumanas** - Authentic hand-cut meat empanadas, juicy and delicious
- **Asado Tradicional** - The classic Argentine Sunday BBQ with wood-fired grilled meats
- **Alfajores de Maicena** - Soft maicena shortbread cookies filled with dulce de leche
- **Milanesa a la Napolitana** - Breaded thin-cut meat with tomato and cheese
- **Locro Patrio** - Traditional Argentine stew with corn and beans
- **Choripán Argentino** - Grilled sausage sandwich
- **Flan Mixto** - Classic caramel custard dessert
- **Pastelitos de Membrillo** - Sweet quince pastries
- **Humita en Chala** - Corn and cheese tamale
- **Provoleta Asada** - Grilled provolone cheese

## 🛠️ Technologies

- [Astro](https://astro.build) v6.1.1 - Modern and fast web framework
- JavaScript/TypeScript
- Node.js >= 22.12.0
- GitHub Pages for hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 22.12.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/juancruzlunatech/AnygravityTest.git
cd AnygravityTest

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📖 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run build` | Build production site to `./docs/` folder |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Get help using the Astro CLI |

## 📁 Project Structure

```
AnygravityTest/
├── src/
│   ├── components/       # Reusable Astro components
│   │   └── RecipeCard.astro
│   ├── data/            # Recipe data
│   │   └── recipes.ts
│   ├── layouts/         # Main layout template
│   │   └── Layout.astro
│   ├── pages/           # Pages and routes
│   │   ├── index.astro           # Home (Spanish)
│   │   ├── recetas/[id].astro    # Recipe detail (Spanish)
│   │   └── en/
│   │       ├── index.astro       # Home (English)
│   │       └── recetas/[id].astro # Recipe detail (English)
│   └── assets/          # Images and static resources
├── public/              # Static files (favicon, images)
├── docs/                # Build output (deployed to GitHub Pages)
├── astro.config.mjs     # Astro configuration
├── package.json
└── README.md
```

## 🌐 Navigation

- **Home (Spanish)**: `/AnygravityTest/` or `/AnygravityTest/recetas`
- **Home (English)**: `/AnygravityTest/en` or `/AnygravityTest/en/recetas`
- **Recipe Detail**: `/AnygravityTest/recetas/[recipe-id]` (Spanish)
- **Recipe Detail**: `/AnygravityTest/en/recetas/[recipe-id]` (English)

### Language Switching

Use the language switcher in the top-right corner:
- 🇪🇸 ES - Switch to Spanish
- 🇺🇸 EN - Switch to English

## 📝 Adding a New Recipe

To add a new recipe, edit the file `src/data/recipes.ts` and add a new object with the following structure:

```typescript
{
  id: 'unique-id',
  image: '/image-filename.png',
  es: {
    title: 'Nombre de la Receta',
    description: 'Descripción breve en español',
    time: '1h 30m',
    difficulty: 'Media',
    ingredients: ['Ingrediente 1', 'Ingrediente 2', '...'],
    steps: ['Paso 1', 'Paso 2', '...']
  },
  en: {
    title: 'Recipe Name',
    description: 'Brief description in English',
    time: '1h 30m',
    difficulty: 'Medium',
    ingredients: ['Ingredient 1', 'Ingredient 2', '...'],
    steps: ['Step 1', 'Step 2', '...']
  }
}
```

Then add your recipe image to the `public/` folder and rebuild:

```bash
npm run build
```

## 🚀 Deployment

This project is configured to deploy to **GitHub Pages** from the main branch.

### Setup

1. Go to your repository settings: `Settings → Pages`
2. Configure as follows:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
3. Click **Save**

The site will be deployed automatically to: `https://juancruzlunatech.github.io/AnygravityTest/`

### Build for Production

```bash
npm run build
git add .
git commit -m "Update recipes"
git push
```

The GitHub Pages deployment happens automatically when you push to the main branch.

## 🔧 Configuration

### Base Path
The project is configured to work with a base path of `/AnygravityTest` for GitHub Pages subpath deployment.

This is set in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://juancruzlunatech.github.io',
  base: '/AnygravityTest',
  outDir: './docs',
});
```

If you deploy to a different location or domain, update these values accordingly.

### Build Output
The build output is configured to generate to the `/docs` folder, which is served by GitHub Pages.

## 🤝 Contributing

Contributions are welcome! To add new recipes or improve the site:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewRecipe`)
3. Make your changes
4. Build and test locally (`npm run build && npm run preview`)
5. Commit your changes (`git commit -m 'Add new recipe'`)
6. Push to your fork (`git push origin feature/NewRecipe`)
7. Open a Pull Request

## 📄 License

This project is under the MIT license - see the LICENSE file for more details.

## 🎯 Roadmap

- [ ] Search functionality for recipes
- [ ] Filter by difficulty and preparation time
- [ ] User comments/reviews
- [ ] Printable recipe PDFs
- [ ] Social media sharing
- [ ] Recipe ratings
- [ ] Favorite recipes bookmarking
- [ ] Dark/Light theme toggle

## 💡 Tips

- Use the language switcher to preview recipes in different languages
- All recipes include ingredients list and step-by-step instructions
- Images are optimized for fast loading
- The site is fully responsive and works on all devices

## 🐛 Issues & Support

If you find any issues or have suggestions, please [open an issue](https://github.com/juancruzlunatech/AnygravityTest/issues) on GitHub.

## ✍️ Author

Created with 💜 by Juan Cruz Luna

---

¡Disfruta descubriendo el auténtico **Sabor Argentino**! 🇦🇷
