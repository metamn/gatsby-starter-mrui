import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import { Link } from "gatsby"

const Container = styled.div`
	min-height: 100vh;
	padding: var(--lem);
`

const FeaturesPage = () => (
	<Layout
		title='Features'
		>
		<Container>
			<p>
				Features
			</p>
			<ul>
				<li><Link to='/features/modular-scale'>Modular scale (with React)</Link></li>
				<li><Link to='/features/custom-fonts'>Custom fonts (MD)</Link></li>
				<li><Link to='/features/theming'>Theming (MDX)</Link></li>
			</ul>
		</Container>
	</Layout>
)

export default FeaturesPage
