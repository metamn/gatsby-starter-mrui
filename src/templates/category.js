import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const CategoryTemplate = ({ pageContext, data }) => {
    const { category } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const Header = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } in "${category}"`

    return (
        <Layout>
            <h1>{Header}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { title } = node.frontmatter
                    const { slug } = node.fields
                    return (
                        <li key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
            <Link to="/categories">All categories</Link>
        </Layout>
    )
}

CategoryTemplate.propTypes = {
    pageContext: PropTypes.shape({
        category: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }).isRequired,
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }).isRequired,
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default CategoryTemplate

export const categoryTemplateQuery = graphql`
    query CategoryTemplateQuery($category: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { in: [$category] } } }
        ) {
            totalCount
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
`
