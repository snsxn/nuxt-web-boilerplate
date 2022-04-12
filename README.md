# Nuxt-Web-Boilerplate

Simple basic boilerplate web development system using Nuxt v2, with minimum dependencies, ready to expand it and `Github actions` configured by default.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# generate static project for modern browsers
$ npm run generate:modern

# build for production and launch server
$ npm run build
$ npm run start
```

For detailed explanation on how Nuxt work, check out the [documentation](https://nuxtjs.org).

## Add functionality

### Using `Axios` for API calls

Install the package:

```bash
npm install @nuxtjs/axios
```

The add it to the `modules` section of `nuxt.config.js`:

```javascript
modules: ['@nuxtjs/axios']
```

Configure it globally creating an `axios` object in `nuxt.config.js`. More information in [Nuxt Axios documentation](https://axios.nuxtjs.org/options). 

## Special Directories

### `assets`

Using an image in HtHTMLml from `assets` directory:

```html
<img src="~/assets/your_image.png" />
```

Using an image in CSS from `assets` directory:

```css
background: url('~assets/banner.svg');
```

More information about the usage of `assets` directory in [Nuxt Assets documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [Nuxt Plugins documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

### `store`

Create this directory to contain your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [Nuxt Vuex documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
