# Storybook Addon: CSS User Preferences

This toolbar addon allows you to emulate CSS user preferences in Storybook.

<p align="center"><img src="/src/screenshot.webp" width="50%" /></p>

## Getting started

First, install the addon.

```sh
$ yarn add storybook-addon-css-user-preferences --dev
```

Add this line to your `main.js` file (create this file inside your Storybook config directory if needed).

```js
module.exports = {
  addons: ['storybook-addon-css-user-preferences'],
};
```

## Configuration

By default, all CSS user preferences are set to the system default.

You can configure your own set of user preferences with the `parameters.cssUserPrefs` parameter:

```js
// .storybook/preview.js

export const parameters = {
  cssUserPrefs: {
    "prefers-color-scheme": "light",
  },
};
```

## Options

### prefers-color-scheme

The `prefers-color-scheme` preference is used to detect if the user has requested a light or dark color theme.

```css
@media (prefers-color-scheme: dark) {
  .button {
    background: #333;
    color:      #fff;
  }
}

@media (prefers-color-scheme: light) {
  .button {
    background: #fff;
    color:      #555;
  }
}
```

[![W3C Specification](https://img.shields.io/badge/Spec-005A9C?logo=w3c&amp;style=flat-square)](https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme) [![MDN Documentation](https://shields.io/badge/docs-black?logo=mozilla&amp;style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

### prefers-contrast

The `prefers-contrast` preference is used to detect if the user has requested that the web content is presented with a higher or lower contrast.

```css
.outline {
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .outline {
    outline: 2px solid black;
  }
}
```

[![W3C Specification](https://img.shields.io/badge/Spec-005A9C?logo=w3c&amp;style=flat-square)](https://www.w3.org/TR/mediaqueries-5/#prefers-contrast) [![MDN Documentation](https://shields.io/badge/docs-black?logo=mozilla&amp;style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)

### prefers-reduced-data

The `prefers-reduced-data` preference is used to detect if the user has requested the web content that consumes less internet traffic.

```css
.hero {
  background-image: url("images/hero.webp");
}

@media (prefers-reduced-data: reduce) {
  .image {
    background-image: url("images/hero@reduced.webp");
  }
}
```

[![W3C Specification](https://img.shields.io/badge/Spec-005A9C?logo=w3c&amp;style=flat-square)](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-data) [![MDN Documentation](https://shields.io/badge/docs-black?logo=mozilla&amp;style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

### prefers-reduced-motion

The `prefers-reduced-motion` preference is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses.

```css
.button {
  animation: pulse 1s linear infinite both;
}

@media (prefers-reduced-motion) {
  .button {
    animation: none;
  }
}
```

[![W3C Specification](https://img.shields.io/badge/Spec-005A9C?logo=w3c&amp;style=flat-square)](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion) [![MDN Documentation](https://shields.io/badge/docs-black?logo=mozilla&amp;style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

### prefers-reduced-transparency

The `prefers-reduced-transparency` preference is used to detect if the user has requested the system minimize the amount of transparent or translucent layer effects it uses.

```css
.glass {
  opacity: 0.5; 
}

@media (prefers-reduced-transparency: reduce) {
  .glass {
    opacity: 1;
  }
}
```

[![W3C Specification](https://img.shields.io/badge/Spec-005A9C?logo=w3c&amp;style=flat-square)](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-transparency)
