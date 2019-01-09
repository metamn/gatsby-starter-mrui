import React from 'react'

import CSSReset from '../components/CSSReset'
import SEO from '../components/SEO'

const IndexPage = () => (
	<>
		<CSSReset />
		<SEO
			title="Home"
			keywords={[`metamn`, `user interface`, `components`, `gatsby`, `react`]}
		/>
		<h1>Hi people</h1>
	</>
)

export default IndexPage
