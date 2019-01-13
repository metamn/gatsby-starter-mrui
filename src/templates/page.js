import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
    min-height: 100vh;
    padding: var(--lem);
`

class PageTemplate extends React.Component {
    render() {
        const page = this.props.data.markdownRemark

        return (
            <Layout title="Page">
                <Container>
                    <h1>{page.frontmatter.title}</h1>
                </Container>
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query PageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`
