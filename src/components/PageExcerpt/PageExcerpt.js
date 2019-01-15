/**
 * Page excerpt
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
 * The text container
 */
const TextContainer = styled.span``

/**
 * The main class
 */
class PageExcerpt extends React.Component {
    render() {
        const { children, loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <TextContainer
                    dangerouslySetInnerHTML={{ __html: `${children}` }}
                />
            </Container>
        )
    }
}

/**
 * The prop types
 */
PageExcerpt.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
    /**
     * The content
     */
    children: PropTypes.node,
}

/**
 * Default props
 */
PageExcerpt.defaultProps = {
    loading: false,
    children: '',
}

export default PageExcerpt

export const pageExcerptFragment = graphql`
    fragment PageExcerptFragment on MarkdownRemark {
        excerpt
    }
`
