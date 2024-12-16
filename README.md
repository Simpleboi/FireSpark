# FireSpark🚀🔥

FireSpark is a blazing-fast, modern, and highly customizable component-based library for web development. Built on top of **SparkCSS**, FireSpark provides a seamless development experience with a combination of **utility-first design**, **reusable UI components**, and a **powerful design system**.

With FireSpark, developers can create consistent, scalable, and responsive UIs with minimal effort. Its lightweight, modular structure allows you to import only the components you need, ensuring **optimal performance and file size**.

## This is NOT production ready just yet, There are no available components. Wait for version 1.1 for more updates

## ✨ **Features**

- 🔥 **Built on top of SparkCSS** | Customizable design tokens, utility classes, and snippets.  
- ⚡ **Blazing-Fast** | Lightweight, modular components for optimal load times.  
- 🎨 **Custom Theming** | Easily switch between light/dark themes and customize colors globally.  
- 🛠️ **Reusable Components** | Buttons, modals, cards, navbars, and more.  
- ♿ **Accessible by Default** | Components follow best practices for accessibility (ARIA support).  
- 🚀 **Utility-First Design** | Use simple classes like `p-4`, `m-2`, and `flex-center` for layouts.  

### Installation🚀

---
To get started with FireSpark, you can install is with npm:

```bash
npm install firespark --save
```

or if you prefer yarn

```bash
yarn add firespark
```

---

### Usage⚙️

Here’s a quick example of how to use FireSpark’s Button component in a React application:

```TypeScript
import { Button } from 'firespark';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Hello, World!')}>
        Click Me
      </Button>
      <Button variant="secondary">
        Secondary Button
      </Button>
    </div>
  );
}

export default App;
```

### How it works

1. Import the components you need from FireSpark `import { Button } from 'firespark'`.
2. Add the FireSpark components like `<Button />` `<Modal />`, and `<Card />` to name a few.
3. Customize the components to your liking by passing in props like `variant` `size`, or `disabled` for example.

---

### Theming🎨

FireSpark comes with support for custom themes. You can easily define global design tokens in the ```variables.sparkcss``` file to update colors, fonts, spacing, and more.

```SCSS
/* src/styles/variables.sparkcss */
:root {
  --primary-color: #ff6600;
  --secondary-color: #4b5563;
  --font-family: 'Inter', sans-serif;
  --border-radius: 4px;
}
```

You can also toggle between **light** and **dark** themes. FireSpark includes a default light and dark theme, but you can define your own.

```SCSS
/* src/themes/dark.sparkcss */
:root {
  --primary-color: #1a202c;
  --background-color: #121212;
  --text-color: #ffffff;
}
```

or you can switch to a dark mode theme using FireSpark's built-in tokens:

```TypeScript
@import 'firespark/themes/dark.sparkcss';
```

---

### Customizing Components🎨

Every FireSpark component can be customized using SparkCSS snippets and utility classes. You can override default styles and create new component variations

Example of Customizing a Button component

```SCSS
/* CustomButton.sparkcss */
@snippet custom-button($color: #1a73e8) {
  background-color: $color;
  color: white;
  border-radius: 6px;
  padding: 12px 24px;
}

.button-primary {
  @apply custom-button(#1a73e8);
}

.button-secondary {
  @apply custom-button(#ff6600);
}
```

With this setup, you’ve now customized FireSpark’s Button component to have a unique design for primary and secondary buttons.

---

### Development Setup🛠️

FireSpark is open-source so we welcome contributions from the community! If you want to contribute to FireSpark, follow these instructions to set up your development environment:

- Clone the repository.

```Bash
git clone https://github.com/your-username/firespark.git
```

- Navigate to the project directory

```Bash
cd firespark
```

- Install Dependencies

```Bash
npm install
```

- Start the development server

```Bash
npm run dev
```

You can now edit components in the ```/src/components/``` folder. The development server will hot-reload changes automatically.

---

### Contributing🤝

FireSpark is open-source so we welcome contributions from the community! If you want to contribute to FireSpark, follow these instructions to set up your development environment:

- Fork the repo and create your branch

```Bash
git checkout -b feature/new-component
```

- Make your changes and commit

```Bash
git commit -m "Add new component"
```

- Push to the branch and submit a Pull Request

We’ll review your changes and work together to improve FireSpark for everyone.

---

### License

FireSpark is licensed under the MIT License, meaning it’s free to use in personal and commercial projects

---

### Contact

We're here to support you! If you have any questions, need assistance, or want to report a bug, please reach out using one of the options below:

- 🐛 Report Issues | [GitHub Issues](https://github.com/your-username/firespark/issues) (Update this link)

- 📧 Email | [Contact Us](mailto:n8thegr8.jsx@gmail.com)

Special thanks to the developers, maintainers, and contributors who support the development of FireSpark. Your dedication ensures it stays blazing fast, flexible, and easy to use. We’re excited to see what you build with FireSpark!

"Small Spark, Big Fire: UI finally made simple"
-n8
