import React from 'react'
import styled from 'styled-components'

import LayoutBasic from '../components/LayoutBasic'

import { Link } from "gatsby"

const Container = styled.div`
	min-height: 100vh;
	padding: var(--lem);
`


const FeaturesPage = () => (
	<LayoutBasic
		title='Features'
		>
		<Container>
			Features
		</Container>
	</LayoutBasic>
)

export default FeaturesPage
