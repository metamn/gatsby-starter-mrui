import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Color from '../components/Color'

const Button = styled.button`
    ${Color('inverted')}
`

const IndexPage = () => (
    <Layout title="Home">
        <h1>A Gatsby multipurpose starter</h1>
        <p>Gives you a headstart for:</p>
        <ul>
            <li>Landing pages</li>
            <li>Markting websites</li>
            <li>Blogs</li>
        </ul>
        <pre>
            <code>
                npx gatsby new my-project
                https://github.com/gatsbyjs/gatsby-starter-blog
            </code>
        </pre>
        <Link to="/features/">Features</Link>
        Github
    </Layout>
)

export default IndexPage
