import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const PostTemplate = ({ pageContext, data }) => {
    const post = data.markdownRemark
    const { title, date, category, tags } = post.frontmatter
    const { previous, next } = pageContext

    return (
        <Layout title="Post Page">
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{category}</p>
            <p>{tags ? tags.join(', ') : ''}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
            <ul>
                {previous && (
                    <li>
                        <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    </li>
                )}
                {next && (
                    <li>
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    </li>
                )}
            </ul>
        </Layout>
    )
}

PostTemplate.propTypes = {
    pageContext: PropTypes.shape({
        previous: PropTypes.shape({
            fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        }),
        next: PropTypes.shape({
            fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        }),
    }),
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            html: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                date: PropTypes.instanceOf(Date).isRequired,
                category: PropTypes.string,
                tags: PropTypes.arrayOf(String),
            }).isRequired,
        }),
    }),
}

export default PostTemplate

export const postTemplateQuery = graphql`
    query PostTemplateQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                category
                tags
            }
        }
    }
`
