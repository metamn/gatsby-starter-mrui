# A Gatsby multipurpose starter

A Gatsby starter for landing pages, marketing sites and blogs.
See live at http://metamn.io/gatsby-starter-mrui/

## The need

Official Gatsby starters seem to follow the Facebook _move fast and break things_ mantra.

The code inside [these](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) [starters](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) is far from best practices. They just simply and quickly showcase main Gatsby features without aiming to be production ready.

This multipurpose starter _moves slow and fix things_ to provide a solid base for ambitious Gatsby projects.

## To-do

- Markdown html is not displayed
- Test Remark features
- Sometimes a `rm -Rf .cache/gatsby-mdx/*` needed to fix nasty unknown errors like `ReferenceError: window is not defined`

## Features

- Clean code
 - PropTypes: https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
 - Uniform naming: `templates/feature.js` > `FeatureTemplate` > `featureTemplateQuery` > `FeatureTemplateQuery` 
- Categories and tags
 - At least one post or page has to have a category and tag set, otherwise GraphQL will throw an error.
 - With these plugins all content types (posts, pages) share the same category / taxonomy. Otherwise (https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/) only posts can have taxonomies
- Custom content types
 - Inside `/pages` there can be custom content types like blog posts, features, and more
 - Each content type has it's own frontmatter rules / queries and `/templates`.
 - These all can be set up via `gatsby-node.js`
 - This way all content goes inside `pages` - since all content are pages
- Markdown support with Remark and MDX
- Modular scale
- Custom fonts
- Theming with light and dark color schemes
- A typographic grid: https://tinyurl.com/yd2q4rpw
- A CSS reset: https://tinyurl.com/y9msxecc
- Better SEO titles
- Deploys to Github Pages
- Based on the barebones [Gatsby Default Starter](https://www.gatsbyjs.org/docs/quick-start)

## Plugins

### Tags

- https://www.gatsbyjs.org/packages/gatsby-plugin-tags/?=tags

### Categories

- https://www.gatsbyjs.org/packages/gatsby-plugin-categories/?=categ

### MDX

- https://www.gatsbyjs.org/packages/gatsby-mdx/
- It works out of the box without any config / graphql magic
- Mapping HTML elements is done be rendering the MDX file content inside the <Layout> component

### Remark

- https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
- All options and plugins are enabled except KaTeX, and rendering components: https://using-remark.gatsbyjs.org/custom-components/
- Rendering components will be done by MDX
- Mapping HTML elements is already done since the template is rendered inside the <Layout> component which re-styles the markdown output

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
