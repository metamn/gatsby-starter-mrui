import React from 'react'
import styled from 'styled-components'

import LayoutBasic from '../components/LayoutBasic'
import Color from '../components/Color'

const Container = styled.div`
	min-height: 100vh;
	padding: var(--lem);
`

const Button = styled.button`
	${Color('inverted')}
`

const IndexPage = () => (
	<LayoutBasic>
		<Container>
			<h1>A Gatsby multipurpose starter</h1>
			<p>Ideal for:</p>
			<ul>
				<li>Landing pages</li>
				<li>Homepages</li>
				<li>Blogs</li>
			</ul>
			<pre>
				<code>
				npx gatsby new my-landing-page https://github.com/gatsbyjs/gatsby-starter-blog
				</code>
			</pre>
			<Button>
				Features
			</Button>
			Github
		</Container>
	</LayoutBasic>
)

export default IndexPage
