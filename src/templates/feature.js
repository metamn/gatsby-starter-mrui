/**
 * The Feature page template
 *
 */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

class FeaturePageTemplate extends React.Component {
    render() {
        const feature = this.props.data.markdownRemark

        return (
            <Layout title="Feature Page">
                <h1>{feature.frontmatter.title}</h1>
            </Layout>
        )
    }
}

export default FeaturePageTemplate

export const featurePageQuery = graphql`
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
