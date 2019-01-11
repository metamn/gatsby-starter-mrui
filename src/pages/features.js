import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
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
			Features
		</Container>
	</Layout>
)

export default FeaturesPage
