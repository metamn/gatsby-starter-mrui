import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Color from '../components/Color'

import { Link } from "gatsby"

const Container = styled.div`
	min-height: 100vh;
	padding: var(--lem);
`

const Button = styled.button`
	${Color('inverted')}
`

const IndexPage = () => (
	<Layout>
		<Container>
			<h1>A Gatsby multipurpose starter</h1>
			<p>Gives you a headstart for:</p>
			<ul>
				<li>Landing pages</li>
				<li>Markting websites</li>
				<li>Blogs</li>
			</ul>
			<pre>
				<code>
				npx gatsby new my-project https://github.com/gatsbyjs/gatsby-starter-blog
				</code>
			</pre>
			<Link to='/features/'>Features</Link>
			Github
		</Container>
	</Layout>
)

export default IndexPage
