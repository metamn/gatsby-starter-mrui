import React from 'react'

import TypographicGrid from '../components/TypographicGrid'
import CSSReset from '../components/CSSReset'
import SEO from '../components/SEO'

const IndexPage = () => (
	<>
		<CSSReset />
		<TypographicGrid />
		<SEO
			title="Home"
			keywords={[`metamn`, `user interface`, `components`, `gatsby`, `react`]}
		/>
		<h1>Hi people</h1>
	</>
)

export default IndexPage
