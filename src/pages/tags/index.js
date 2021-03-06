import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from '../../components/Layout'

const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
    },
}) => (
    <Layout title="Tags">
        <h1>Tags</h1>
        <ul>
            {group.map(tag => {
                const name = kebabCase(tag.fieldValue)
                const count = tag.totalCount
                const slug = `/tag/${name}/`

                return (
                    <li key={name}>
                        <Link to={slug}>
                            {name} ({count})
                        </Link>
                    </li>
                )
            })}
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

export const tagsPageQuery = graphql`
    query TagsPageQuery {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
