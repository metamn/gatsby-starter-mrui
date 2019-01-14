import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class CategoryTemplate extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout title="Category index">
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug

                    return (
                        <div key={node.fields.slug}>
                            <h3>
                                <Link to={node.fields.slug}>{title}</Link>
                            </h3>
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
    }
}

export default CategoryTemplate

export const pageQuery = graphql`
    query CategoryPage($category: String) {
        allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    frontmatter {
                        title
                        category
                        date
                    }
                }
            }
        }
    }
`
