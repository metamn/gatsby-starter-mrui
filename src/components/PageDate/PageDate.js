/**
 * Page date
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
class PageDate extends React.Component {
    render() {
        const { children, loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <time datetime={children}>{children}</time>
            </Container>
        )
    }
}

/**
 * The prop types
 */
PageDate.propTypes = {
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
PageDate.defaultProps = {
    loading: false,
    children: '',
}

export default PageDate

export const pageDateFragment = graphql`
    fragment PageDateFragment on MarkdownRemark {
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
        }
    }
`
