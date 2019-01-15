import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'

const CategoriesPage = ({
    data: {
        allMarkdownRemark: { group },
    },
}) => (
    <Layout title="Categories">
        <h1>Categories</h1>
        <ul>
            {group.map(category => (
                <li key={category.fieldValue}>
                    <Link
                        to={`/category/${category.fieldValue.toLowerCase()}/`}
                    >
                        {category.fieldValue} ({category.totalCount})
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

CategoriesPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default CategoriesPage

export const categoriesPageQuery = graphql`
    query CategoriesPageQuery {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___category) {
                fieldValue
                totalCount
            }
        }
    }
`
