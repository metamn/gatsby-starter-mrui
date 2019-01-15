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
            {group.map(category => {
                const name = category.fieldValue.toLowerCase()
                const count = category.totalCount

                return (
                    <li key={name}>
                        <Link to={`/category/${name}/`}>
                            {name} ({count})
                        </Link>
                    </li>
                )
            })}
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
