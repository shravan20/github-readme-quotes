
<p align="center">
  <img align="center" width="20%" src="assets/uiScreen.gif" alt="logo"/>
  <h5 align="center">github-readme-quotes: Dynamic quote generator for your GitHub readmes</h5>
</p>

---

```
- Project Status: Discontinued Deployment, Ongoing Code Improvement, Feature Development, and Maintenance

- Project Deployment Status: I have moved it from Heroku to custom cloud now. Please access the content from `http://34.168.217.81:3004/quote`

- Self-Hosting and Contributions: If you wish to host the project on your own, you can fork the repository and
deploy it according to your needs. Feel free to reach out to me if you require any assistance or have inquiries
about the project. Your contributions and involvement in the project are welcome.
```

---
<p align="center">
<a href="https://secure.actblue.com/contribute/page/saveanimals-home?refcode=homepage&recurring=true&amount=25">
<img style="display: block; margin: 0 auto"  src ="https://saveanimalsfacingextinction.org/wp-content/themes/wideeyecreative/images/safe-logo-2016.svg" width="200" height="200"/>
</a>
</p>
  Are you considering supporting the project by donating? Please DO NOT!!
Instead, Help People by giving monetary funds to overcome specific social, cultural, or economic hurdles individuals face in their daily lives.
<br><br>

<p align="center">
 <b><i> Inspired by <a href="https://github.com/anuraghazra"> @anuraghazra </a> </i></b>
</p>

---

![banner](./assets/README.png)

![alt](https://img.shields.io/apm/l/vim-mode?label=license&logo=dark-green) ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-success) ![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github) [![GitHub contributors](https://img.shields.io/github/contributors/shravan20/github-readme-quotes.svg)](https://github.com/shravan20/github-readme-quotes/graphs/contributors) ![Pull Request Counts](https://img.shields.io/bitbucket/pr/shravan20/github-readme-quotes) ![last commit](https://img.shields.io/github/last-commit/shravan20/github-readme-quotes) ![deployment-status](https://img.shields.io/website?url=https%3A%2F%2Fgithub-readme-quotes.herokuapp.com%2Fquote) [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/shravan20/github-readme-quotes/)
<a href="https://discord.gg/QJ8cnPHgVZ">
  <img align="center" src="https://img.shields.io/discord/779439447736451132?label=discord-server&style=flat-square" />
</a>

### Featuring on <a href="https://www.producthunt.com/posts/dynamic-github-profile-readme-quotes?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dynamic-github-profile-readme-quotes" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=276934&theme=light" alt="Dynamic GitHub Profile Readme Quotes - Everlasting Poetic Touch to GitHub Profiles for everyone | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" align="center"/></a>


<br>

### Use [User Interface](https://github-readme-quotes.herokuapp.com/), to view designed quotes and copy link and paste it directly

<img src="./assets/uiScreen.gif" width=100% align="center"/>

---

##  Features

| Sl No  | Feature Name  | Description  |
|:-:|:-:|:-:|
| 1  | [Dynamic Quotes](#github-readme-quotes-1)  | Different quotes every time its rendered for GitHub Profile Readme  |
| 2  | [Colorful Themes](#themes)  | Various colorful themes available for cards |
| 3  | [Design Layouts](#layouts)  | Different Layout design cards are available  |
| 4  | [Animation](#animations)  | Animations available for quote cards |
| 5  | [Custom Quotes from GitHub Gists](#custom-quotes)  | You can add custom quotes of your own or own choice from GitHub Gists json files |
| 6  | [Quotes based on Category](#category-based-quotes)  | Different category based quotes are available |




---


<p align="center">
Note: To read an article on this project, please refer:
<a href = "https://dev.to/imshravan/github-profile-readme-animated-dynamic-quote-generator-4le6"><i>GitHub Profile README : Animated Dynamic Quote Generator</i></a>
</p>


---

# Github Readme Quotes
Copy and paste the following markdown content to display the quote.

```md
![Quote](https://github-readme-quotes.herokuapp.com/quote)
```
<!-- Scrnshot of quote in default mode -->
<p align="center">
  <img src="https://camo.githubusercontent.com/f110f1c085d6afab0bcc0bfcba3ddf1a81113247138ba53b8f26d574805bb502/68747470733a2f2f6769746875622d726561646d652d71756f7465732e6865726f6b756170702e636f6d2f71756f74653f"/>
</p>

<br><hr>

- ### Themes
You can display your quote in different themes without any manual customization.

Use `?theme=THEME_NAME` parameter as shown below.


```md
![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark)
```
<!-- Scrnshot of quote in dark theme -->

#### Available Themes
dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

**Dark**

![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark)

**Light Theme**

![Quote](https://github-readme-quotes.herokuapp.com/quote?)

<!-- Scrnshot of quote in different themes -->

You can explore different themes [here](./src/themes/README.md).

<b>Feel free to contribute different themes.</b>

---

- ### Layouts
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

You can explore different layouts [here](./src/layouts/README.md).

<b>Feel free to contribute different layouts.</b>

---

- ### Fonts
You can also add fonts to your templates.

Use `?font=FONT_NAME` parameter as shown below

```md
![Quote](https://github-readme-quotes.herokuapp.com/quote?font=Redressed)
```

#### Font 1 (Default)

![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark)

#### Font 2 (Redressed)

![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark&font=Redressed)

<!-- Scrnshot of quote in different fonts -->

You can explore different fonts [here](./src/fonts/README.md).

<b>Feel free to contribute different fonts.</b>

---

- ### Animations
You can also add animations to your templates.

Use `?animation=ANIMATION` paramater as shown below

```md
![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark&animation=grow_out_in)
```
<!-- Gif of quote in animation -->

#### Animation 1

![Quote](https://github-readme-quotes.herokuapp.com/quote?theme=dark&animation=grow_out_in)


You can explore different animations [here](./src/animations/README.md).


---

- ### Custom Quotes
You can also provide a file with the list of quotes and a random quote will be generated for you.

#### Follow the steps to provide your own custom quotes,
- Use the template provided at [here](./customQuotes/quotes.json) and write your own file with multiple quotes.
- Save the file in the repository in any (public) directory or anywhere in the internet.
- Get the link of the file.
- Use `?quotesUrl=URL` as shown below
   ```
   ![Quote](https://github-readme-quotes.herokuapp.com/quote?quotesUrl=https://github.com/ShubhKotnala/github-readme-quotes/blob/custom-quotes/customQuotes/quotes.json)
    ```

![Quote](https://github-readme-quotes.herokuapp.com/quote?quotesUrl=https://github.com/ShubhKotnala/github-readme-quotes/blob/custom-quotes/customQuotes/quotes.json)


---

- ### Category based Quotes
You can also provide a category to fetch the list of quotes based on certain category and a random quote will be generated for you based on category you specify.

#### Available Categories
 - motivational
 - fun
 - life
 - general
 - programming
 - success..etc.

   - Use `quoteCategory=categoryName` as shown below
   ```
    ![Quote](https://github-readme-quotes.herokuapp.com/quote?quoteCategory=motivational)
    ```


![Quote](https://github-readme-quotes.herokuapp.com/quote?quoteCategory=motivational)


<b>Feel free to contribute different quotes to different categories.</b>

#### Follow the steps to add quotes to category,
- Add the quote you want in this [file](./customQuotes/category.json) based on the category it falls into.
- If the category you want doesn't exist, feel free to add the category in this [file](./customQuotes/category.json) and add the quotes.



---

## Swagger Docs

To view Swagger docs, run `npm start` and open ![localhost:3002/api-docs](localhost:3002/api-docs).


---

- ##### <img src="https://user-images.githubusercontent.com/18126719/56791599-0868f980-683a-11e9-8a8b-134ced040c8e.png" width="30"> _Huge Shoutout to all the Star-Gazers_
[![Stargazers repo roster for @shravan20/github-readme-quotes](https://reporoster.com/stars/shravan20/github-readme-quotes)](https://github.com/shravan20/github-readme-quotes/stargazers)

---

- ##### <img src="https://ghost.org/images/docs/setup/fork.gif" width="30"> _Huge Shoutout to all the Forkers_
[![Forkers repo roster for @shravan20/github-readme-quotes](https://reporoster.com/forks/shravan20/github-readme-quotes)](https://github.com/shravan20/github-readme-quotes/network/members)
