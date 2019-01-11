import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import TypographicGrid from '../TypographicGrid'
import Reset from '../Reset'
import SEO from '../SEO'

import styled from 'styled-components'
import Text from '../Text'
import Color from '../Color'

const Container = styled.div`
	${Text()}
	${Color()}
`

const Layout = ({ title, keywords, children }) => (
	<>
		<Reset />
		<TypographicGrid
			displayVerticalRhytm={false}
			displayHorizontalRhytm={false}
		/>
		<SEO
			title={title}
			keywords={keywords}
		/>
		<Container>
			{children}
		</Container>
	</>
)


Layout.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	keywords: PropTypes.array,
}

Layout.defaultProps = {
	title: 'Home',
	keywords: [`gatsby`],
}


export default Layout
