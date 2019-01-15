import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/Page'

const CategoryTemplate = ({ pageContext, data }) => {
    const { category } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const Header = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } in "${category}"`

    return (
        <Layout title={category}>
            <h1>{Header}</h1>
            {edges.map(({ node }) => {
                const { title } = node.frontmatter
                const { slug } = node.fields
                return (
                    <Page key={slug} title={<Link to={slug}>{title}</Link>} />
                )
            })}
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
                    ...PageTitleFragment
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
