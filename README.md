# 🍖 Argentine Recipes

A traditional Argentine recipes website built with **Astro**, featuring authentic flavors of Argentine cuisine with multilingual support (Spanish and English).

## ✨ Features

- 🌍 **Multilingual**: Full support for Spanish and English
- 🎨 **Modern Design**: Attractive interface with dark theme
- 🔍 **Detailed Recipes**: Complete information on ingredients, steps and preparation time
- 📱 **Responsive**: Optimized for mobile and desktop devices
- ⚡ **High Performance**: Built with Astro for maximum speed

## 🍽️ Included Recipes

- **Tucuman Empanadas** - Authentic hand-cut meat empanadas, juicy and delicious
- **Traditional Asado** - The classic Argentine Sunday BBQ with wood-fired grilled meats
- **Maicena Alfajores** - Soft maicena shortbread cookies filled with dulce de leche

## 🛠️ Technologies

- [Astro](https://astro.build) v6.1.1 - Modern and fast web framework
- JavaScript/TypeScript
- Node.js >= 22.12.0

## 🚀 Quick Start

### Prerequisites
- Node.js 22.12.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/recetas-argentinas.git
cd recetas-argentinas

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📖 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build the site for production |
| `npm run preview` | Preview the production build |
| `npm run astro -- --help` | Astro CLI help |

## 📁 Project Structure

```
recetas-argentinas/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── data/            # Recipe data
│   ├── layouts/         # Main layouts
│   ├── pages/           # Pages and routes
│   │   ├── index.astro
│   │   ├── recetas/     # Spanish recipes page
│   │   └── en/          # English pages
│   └── assets/          # Images and static resources
├── public/              # Static files
├── astro.config.mjs     # Astro configuration
└── package.json
```

## 🌐 Navigation

- **Home**: Main page with site presentation
- **Recipes (ES)**: Recipe catalog in Spanish at `/recetas`
- **Recipes (EN)**: Recipe catalog in English at `/en/recipes`

## 📝 Adding a New Recipe

To add a new recipe, edit the `src/data/recipes.ts` file and add a new object with the following structure:

```typescript
{
  id: 'unique-id',
  image: '/image-path.png',
  es: {
    title: 'Recipe Name',
    description: 'Description',
    time: '1h 30m',
    difficulty: 'Medium',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    steps: ['Step 1', 'Step 2']
  },
  en: {
    title: 'Recipe Name',
    description: 'Description',
    time: '1h 30m',
    difficulty: 'Medium',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    steps: ['Step 1', 'Step 2']
  }
}
```

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/FantasticRecipe`)
3. Commit your changes (`git commit -m 'Add fantastic recipe'`)
4. Push to the branch (`git push origin feature/FantasticRecipe`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license - see the LICENSE file for more details.

## 🎯 Future Features

- [ ] Recipe search system
- [ ] Filter by difficulty and preparation time
- [ ] Comments/reviews database
- [ ] Printable recipe version
- [ ] Social media integration

## ✍️ Author

Created with 💜 by Juancruzlunatech

---

Enjoy discovering the authentic **Argentine Flavor**! 🇦🇷
