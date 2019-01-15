/**
 * The Page component
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link, graphql } from 'gatsby'

import PageTitle from '../PageTitle'
import PageDate from '../PageDate'
import PageExcerpt from '../PageExcerpt'

/**
 * The loading container
 */
const Loading = styled.div``

/**
 * The main container
 */
const Container = styled.article``

/**
 * The main class
 */
class Page extends React.Component {
    render() {
        const { title, date, excerpt, loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <Container className={className}>
                <PageTitle>{title}</PageTitle>
                <PageDate>{date}</PageDate>
                <PageExcerpt>{excerpt}</PageExcerpt>
            </Container>
        )
    }
}

/**
 * The prop types
 */
Page.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
    /**
     * The title
     */
    title: PropTypes.node,
    /**
     * The date
     */
    date: PropTypes.node,
    /**
     * The excerpt
     */
    excerpt: PropTypes.node,
}

/**
 * Default props
 */
Page.defaultProps = {
    loading: false,
    title: '',
    date: '',
    excerpt: '',
}

export default Page

export const pageFragment = graphql`
    fragment PageFragment on MarkdownRemark {
        ...PageTitleFragment
        ...PageDateFragment
        ...PageExcerptFragment
    }
`
