import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
min-height: 100vh;
padding: var(--lem);
`

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark
		const { previous, next } = this.props.pageContext

		return (
			<Layout
			title="Post"
			>
			<h1>{post.frontmatter.title}</h1>
			<p>
			{post.frontmatter.date}
			</p>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
			<hr/>

			<ul>
			<li>
			{
				previous &&
				<Link to={previous.fields.slug} rel="prev">
				← {previous.frontmatter.title}
				</Link>
			}
			</li>
			<li>
			{
				next &&
				<Link to={next.fields.slug} rel="next">
				{next.frontmatter.title} →
				</Link>
			}
			</li>
			</ul>
			</Layout>
		)
	}
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`
