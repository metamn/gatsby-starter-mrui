/**
 * Page category
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link, graphql } from 'gatsby'

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
class PageCategory extends React.Component {
    render() {
        const { category, loading, className } = this.props
        const slug = `/category/${category}`

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <Link to={slug}>{category}</Link>
            </Container>
        )
    }
}

/**
 * The prop types
 */
PageCategory.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
    /**
     * The category
     */
    category: PropTypes.string,
}

/**
 * Default props
 */
PageCategory.defaultProps = {
    loading: false,
    category: '',
}

export default PageCategory

export const pageCategoryFragment = graphql`
    fragment PageCategoryFragment on MarkdownRemark {
        frontmatter {
            category
        }
    }
`
