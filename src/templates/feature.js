import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const FeatureTemplate = ({ data }) => {
    const page = data.markdownRemark
    const { title, category, tags } = page.frontmatter

    return (
        <Layout title="Feature Page">
            <h1>{title}</h1>
            <p>{category}</p>
            <p>{tags.join(', ')}</p>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
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

export const featurePageQuery = graphql`
    query FeaturePageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                category
                tags
            }
        }
    }
`
