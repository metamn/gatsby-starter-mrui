import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'

const Container = styled.div`
    min-height: 100vh;
    padding: var(--lem);
`

class CategoryIndex extends React.Component {
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

export default CategoryIndex

export const pageQuery = graphql`
    query {
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
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`
