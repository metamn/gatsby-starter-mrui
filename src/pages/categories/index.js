import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'

const Container = styled.div`
    min-height: 100vh;
    padding: var(--lem);
`

const CategoriesPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    <Layout title="Categories index">
        <h1>Categories</h1>
        <ul>
            {group.map(category => (
                <li key={category.fieldValue}>
                    <Link to={`/category/${category.fieldValue}/`}>
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

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___category) {
                fieldValue
                totalCount
            }
        }
    }
`
