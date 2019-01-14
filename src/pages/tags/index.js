import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'

const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
    },
}) => (
    <Layout title="Tags index">
        <h1>Tags</h1>
        <ul>
            {group.map(tag => (
                <li key={tag.fieldValue}>
                    <Link to={`/tag/${tag.fieldValue.toLowerCase()}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

TagsPage.propTypes = {
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

export default TagsPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
