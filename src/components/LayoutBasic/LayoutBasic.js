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

const LayoutBasic = ({ children }) => (
	<StaticQuery
		query={layoutBasicQuery}
		render={data => (
			<>
				<Reset />
				<TypographicGrid
				 	displayVerticalRhytm={false}
					displayHorizontalRhytm={false}
				/>
				<SEO
					title="Home"
					keywords={[`metamn`, `user interface`, `components`, `gatsby`, `react`]}
				/>
				<Container>
					{children}
				</Container>
			</>
		)}
	/>
)

const layoutBasicQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

LayoutBasic.propTypes = {
	children: PropTypes.node.isRequired,
}


export default LayoutBasic
