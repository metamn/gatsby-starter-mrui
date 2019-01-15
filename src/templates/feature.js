import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/Page'

const FeatureTemplate = ({ data }) => {
    const page = data.markdownRemark
    const { title, category, tags } = page.frontmatter

    return (
        <Layout title="Feature Page">
            <Page title={title} category={category} tags={tags}>
                <div dangerouslySetInnerHTML={{ __html: page.html }} />
            </Page>
        </Layout>
    )
}

FeatureTemplate.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            html: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                category: PropTypes.string,
                tags: PropTypes.arrayOf(String),
            }).isRequired,
        }),
    }),
}

export default FeatureTemplate

export const featureTemplateQuery = graphql`
    query FeatureTemplateQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            ...PageFragment
        }
    }
`
