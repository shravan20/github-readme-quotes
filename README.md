# github-readme-quotes
Dynamic quote generator for your GitHub readmes

![banner](./assets/README.png)

![alt](https://img.shields.io/apm/l/vim-mode?label=license&logo=dark-green) ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-success) ![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github) ![Repository views](https://gpvc.arturio.dev/shravan20) [![GitHub contributors](https://img.shields.io/github/contributors/shravan20/github-readme-quotes.svg)](https://github.com/shravan20/github-readme-quotes/graphs/contributors)

# Github Readme Quotes
Copy and paste the following markdown content to display the quote.

```md
![Quote](https://github-readme-quotes.herokuapp.com/quote)
```
<!-- Scrnshot of quote in default mode -->

### Themes
You can display your quote in different themes without any manual customization.

Use `?theme=THEME_NAME` parameter as shown below.


```md
![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark)
```
<!-- Scrnshot of quote in dark theme -->

#### Available Themes
dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

**Gotham**

![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=gotham)

**Dark**

![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark)

**Light Theme**

![Quote](https://github-readme-quotes.herokuapp.com/quote?)


<!-- Scrnshot of quote in different themes -->

You can explore different themes [here](./src/themes/themes.js).



<b>Feel free to contribute different themes.</b>

### Animations
You can also add animations to your templates.

Use `?animation=ANIMATION` paramater as shown below

```md
![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark&animation=grow_out_in)
```
<!-- Gif of quote in animation -->

#### Animation 1

![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark&animation=grow_out_in)


You can explore different themes [here](./src/animations/animation.js).

### Layouts
You can also change the layout of your templates.

Use `?layout=LAYOUT` parameter as shown below


```md
![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark&layout=socrates)
```
#### Layout 1 (Default)
![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark)


#### Layout 2 (Socrates)
![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark&layout=socrates)


<!-- Scrnshot of quote in particular layout -->


You can explore different themes [here](./src/layouts/layout.js).

<b>Feel free to contribute different layouts.</b>


