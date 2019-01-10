import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import TypographicGrid from '../TypographicGrid'
import CSSReset from '../CSSReset'
import SEO from '../SEO'

import styled, { css } from "styled-components"
import TextStyle from '../TextStyle'

const Container = styled.div`
	${TextStyle()}
`

const LayoutBasic = ({ children }) => (
	<StaticQuery
		query={layoutBasicQuery}
		render={data => (
			<Container>
				<CSSReset />
				<TypographicGrid />
				<SEO
					title="Home"
					keywords={[`metamn`, `user interface`, `components`, `gatsby`, `react`]}
				/>
				{children}
			</Container>
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
