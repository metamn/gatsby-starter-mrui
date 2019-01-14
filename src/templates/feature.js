import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
    min-height: 100vh;
    padding: var(--lem);
`

class FeaturePageTemplate extends React.Component {
    render() {
        const feature = this.props.data.markdownRemark

        return (
            <Layout title="Feature Page">
                <Container>
                    <h1>{feature.frontmatter.title}</h1>
                </Container>
            </Layout>
        )
    }
}

export default FeaturePageTemplate

export const featuresPageQuery = graphql`
    query FeaturePageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`
