import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import TypographicGrid from '../TypographicGrid'
import CSSReset from '../CSSReset'
import SEO from '../SEO'

import styled from 'styled-components'
import TextStyle from '../TextStyle'
import Color from '../Color'

const Container = styled.div`
	${TextStyle()}
	${Color()}
`

const LayoutBasic = ({ children }) => (
	<StaticQuery
		query={layoutBasicQuery}
		render={data => (
			<>
				<CSSReset />
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
