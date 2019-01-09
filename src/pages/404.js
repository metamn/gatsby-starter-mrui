import React from 'react'

import CSSReset from '../components/CSSReset'
import SEO from '../components/SEO'
import Image from '../components/Image'

const NotFoundPage = () => (
	<>
		<CSSReset />
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		<Image />
	</>
)

export default NotFoundPage
