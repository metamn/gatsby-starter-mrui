import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/Page'

const TagTemplate = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const Header = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`

    return (
        <Layout>
            <h1>{Header}</h1>
            {edges.map(({ node }) => {
                const { title } = node.frontmatter
                const { slug } = node.fields
                return (
                    <Page key={slug} title={<Link to={slug}>{title}</Link>} />
                )
            })}
            <Link to="/tags">All tags</Link>
        </Layout>
    )
}

TagTemplate.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
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

export default TagTemplate

export const tagTemplateQuery = graphql`
    query TagTemplateQuery($tag: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
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
