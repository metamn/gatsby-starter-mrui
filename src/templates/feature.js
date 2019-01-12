import React from "react"
import { graphql } from "gatsby"

class FeaturePageTemplate extends React.Component {
	render() {
		const page = this.props.data.markdownRemark

		return (
			<h1>{page.frontmatter.title}</h1>
		)
	}
}

export default FeaturePageTemplate

export const pageQuery = graphql`
	query FeaturePageBypath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`
