import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
	min-height: 100vh;
	padding: var(--lem);
`

class FeaturePageTemplate extends React.Component {
	render() {
		const page = this.props.data.markdownRemark

		return (
			<Layout
				title='Features'
				>
				<Container>
					<h1>{page.frontmatter.title}</h1>
				</Container>
			</Layout>
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
