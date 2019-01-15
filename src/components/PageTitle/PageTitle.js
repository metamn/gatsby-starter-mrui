/**
 * Page title
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
const Container = styled.h3``

/**
 * The text container
 */
const TextContainer = styled.span``

/**
 * The main class
 */
class PageTitle extends React.Component {
    render() {
        const { children, wrapper, loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <TextContainer>{children}</TextContainer>
            </Container>
        )
    }
}

/**
 * The prop types
 */
PageTitle.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
    /**
     * The HTML tag wrapper
     */
    wrapper: PropTypes.string,
    /**
     * The content
     */
    children: PropTypes.node,
}

/**
 * Default props
 */
PageTitle.defaultProps = {
    loading: false,
    wrapper: 'h3',
    children: '',
}

export default PageTitle

export const pageTitleFragment = graphql`
    fragment PageTitleFragment on MarkdownRemark {
        frontmatter {
            title
        }
        fields {
            slug
        }
    }
`
