import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
    return (
        <StaticQuery
            query={seoQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description
                const metaTitle = data.site.siteMetadata.title
                const newTitle =
                    title == 'Home'
                        ? `${metaTitle} - ${metaDescription}`
                        : `${title} - ${metaTitle}`

                return (
                    <Helmet
                        htmlAttributes={{ lang }}
                        title={newTitle}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: newTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `),
                                      }
                                    : []
                            )
                            .concat(meta)}
                    />
                )
            }}
        />
    )
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
}

SEO.defaultProps = {
    description: '',
    lang: `en`,
    meta: [],
    keywords: [],
    title: '',
}

export default SEO

const seoQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
