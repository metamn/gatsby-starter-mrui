# A Gatsby multipurpose starter

A Gatsby starter for landing pages, marketing sites and blogs.
See live at http://metamn.io/gatsby-starter-mrui/

## The need

Official Gatsby starters seem to follow the Facebook *move fast and break things* mantra.

The code inside [these](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) [starters](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) is far from best practices. They just simply and quickly showcase main Gatsby features without aiming to be production ready.

This multipurpose starter *moves slow and fix things* to provide a solid base for ambitious Gatsby projects.  

## To-do

- Test Remark features

## Features

- Markdown support with Remark
- Modular scale
- Custom fonts
- Theming with light and dark color schemes
- A typographic grid: https://tinyurl.com/yd2q4rpw
- A CSS reset: https://tinyurl.com/y9msxecc
- Better SEO titles
- Deploys to Github Pages
- Based on the barebones [Gatsby Default Starter](https://www.gatsbyjs.org/docs/quick-start)

## Plugins

### Remark

- https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
- all options and plugins are enabled except KaTeX, and rendering components: https://using-remark.gatsbyjs.org/custom-components/
- rendering components will be done by MDX
- mapping HTML elements is already done since the template is rendered inside the <Layout> component which re-styles the markdown output

### Modular scale

- https://www.modularscale.com/

### webfontloader

- https://github.com/typekit/webfontloader

### Styled components

- https://www.gatsbyjs.org/docs/styled-components/

### `gatsby-image`, to display images

- [gatsby-image](https://www.gatsbyjs.org/docs/working-with-images/#optimizing-images-with-gatsby-image)
- [A comprehensive guide](https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/)
- Component: Image

### Sharp, for resizing and optimizig images

- [Sharp](https://www.gatsbyjs.org/docs/working-with-images/#query-images-with-graphql)
- Setup: `gatsby-config.js`

### React Helmet, for SEO

- [React Helmet](https://www.gatsbyjs.org/docs/add-page-metadata/) - for managing the document head
- Component: SEO
- Setup: `gatsby-config.js`
