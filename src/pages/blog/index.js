import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

const BlogPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => (
    <Layout title="Blog index">
        {edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
                <div key={node.fields.slug}>
                    <PageTitle>
                        <Link to={node.fields.slug}>{title}</Link>
                    </PageTitle>
                    <small>{node.frontmatter.date}</small>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: node.excerpt,
                        }}
                    />
                </div>
            )
        })}
    </Layout>
)

BlogPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                            date: PropTypes.instanceOf(Date).isRequired,
                        }).isRequired,
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }).isRequired,
                        excerpt: PropTypes.string.isRequired,
                    }).isRequired,
                }).isRequired
            ),
        }),
    }),
}

export default BlogPage

export const blogPageQuery = graphql`
    query blogPageQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/src/pages/blog/**/*.md" } }
            sort: { order: DESC, fields: frontmatter___date }
            limit: 1000
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    ...PageTitleFragment
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`
