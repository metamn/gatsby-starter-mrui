/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const featurePageTemplate = path.resolve('./src/templates/feature.js')

		resolve(
			graphql(
				`
				{
					allMarkdownRemark(
						limit: 1000
					) {
						edges {
							node {
								frontmatter {
									path
								}
							}
						}
					}
				}
				`
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}

				result.data.allMarkdownRemark.edges.forEach(({ node }) => {
					createPage({
						path: node.frontmatter.path,
						component: featurePageTemplate,
						context: {},
					})
				})
			})
		)
	})
}
