import React from 'react'
import styled from 'styled-components'

import Layout from '../../../components/Layout'
import { Link } from "gatsby"

const Container = styled.div`
	min-height: 100vh;
	padding: var(--lem);
`

const ModularScalePage = () => (
	<Layout
		title='Modular scale'
		>
		<Container>
			Modular scale
		</Container>
	</Layout>
)

export default ModularScalePage
