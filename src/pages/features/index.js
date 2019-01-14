import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const Container = styled.div`
    min-height: 100vh;
    padding: var(--lem);
`

const FeaturesPage = () => (
    <Layout title="Features">
        <Container>
            <p>Features</p>
            <ul>
                <li>
                    <Link to="/features/modular-scale">
                        Modular scale (rendered with React)
                    </Link>
                </li>
                <li>
                    <Link to="/features/custom-fonts">
                        Custom fonts (rendered with Remark)
                    </Link>
                </li>
                <li>
                    <Link to="/features/theming">
                        Theming (renderedd with MDX)
                    </Link>
                </li>
            </ul>
            <p>
                <Link to="/blog">Blog</Link>
            </p>
            <p>
                <Link to="/categories">Categories</Link>
            </p>
        </Container>
    </Layout>
)

export default FeaturesPage
