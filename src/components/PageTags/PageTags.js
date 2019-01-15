/**
 * Page tags
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'

/**
 * The loading container
 */
const Loading = styled.div``

/**
 * The main container
 */
const Container = styled.div``

/**
 * The main class
 */
class PageTags extends React.Component {
    render() {
        const { tags, loading, className } = this.props
        const tagsWithLink = tags
            ? tags.map(tag => ({
                  title: kebabCase(tag),
                  slug: `/tag/${kebabCase(tag)}`,
              }))
            : []

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <ul>
                    {tagsWithLink &&
                        tagsWithLink.map(tag => {
                            const { title, slug } = tag
                            return (
                                <li key={slug}>
                                    <Link to={slug}>{title}</Link>
                                </li>
                            )
                        })}
                </ul>
            </Container>
        )
    }
}

/**
 * The prop types
 */
PageTags.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
    /**
     * Tags
     */
    tags: PropTypes.arrayOf(String),
}

/**
 * Default props
 */
PageTags.defaultProps = {
    loading: false,
    tags: [],
}

export default PageTags

export const pageTagsFragment = graphql`
    fragment PageTagsFragment on MarkdownRemark {
        frontmatter {
            tags
        }
    }
`
