import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'

const FeaturesPage = () => (
    <Layout title="Features">
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
                <Link to="/features/theming">Theming (renderedd with MDX)</Link>
            </li>
        </ul>
        <p>
            <Link to="/blog">Blog</Link>
        </p>
        <p>
            <Link to="/categories">Categories</Link>
        </p>
        <p>
            <Link to="/tags">Tags</Link>
        </p>
    </Layout>
)

export default FeaturesPage
