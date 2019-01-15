/**
 * Page category
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
class PageCategory extends React.Component {
    render() {
        const { category, loading, className } = this.props

        const name = kebabCase(category)
        const slug = `/category/${name}`

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <Link to={slug}>{name}</Link>
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
