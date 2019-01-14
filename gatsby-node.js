/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

/**
 * Create different content types by using different
 * queries. We use the `graphql` function which returns a Promise
 * and ultimately resolve all of them using Promise.all(Promise[])
 *
 * Source: https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/
 *
 * @param  {[type]} graphql [description]
 * @param  {[type]} actions [description]
 * @return {[type]}         [description]
 */
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const featureTemplate = path.resolve('./src/templates/feature.js')
    const blogPostTemplate = path.resolve('./src/templates/post.js')

    // Posts
    const posts = graphql(`
        {
            posts: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { glob: "**/src/pages/blog/**/*.md" }
                }
                sort: { order: DESC, fields: frontmatter___date }
                limit: 1000
            ) {
                edges {
                    node {
                        excerpt
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            console.log(result.errors)
            Promise.reject(result.errors)
        }

        const posts = result.data.posts.edges

        posts.forEach((post, index) => {
            const previous =
                index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
                path: post.node.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            })
        })
    })

    // Features
    const features = graphql(`
        {
            features: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { glob: "**/src/pages/features/**/*.md" }
                }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            console.log(result.errors)
            Promise.reject(result.errors)
        }

        result.data.features.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: featureTemplate,
                context: {
                    slug: node.fields.slug,
                },
            })
        })
    })

    // Return a Promise which would wait for both the queries to resolve
    return Promise.all([posts, features])
}

/**
 * Generate slug for posts and pages
 *
 * Source: https://www.gatsbyjs.org/tutorial/part-seven/
 *
 * @param  {[type]} node    [description]
 * @param  {[type]} actions [description]
 * @param  {[type]} getNode [description]
 * @return {[type]}         [description]
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const relativeFilePath = createFilePath({
            node,
            getNode,
        })
        createNodeField({
            node,
            name: `slug`,
            value: `${relativeFilePath}`,
        })
    }
}
