import React from 'react'
import { css } from 'styled-components'
import theme from '../Theme'

import Font from '../Font'
import Scale from '../Scale'

const TextStyle = (style = 'headline') => {
	const ts = theme.textStyle[style]
	let ret = ''

	ret += ts.scale ? css`${Scale(ts.scale)}` : ''
	ret += ts.font ? css`${Font(ts.font)}` : ''

	return ret
}

export default TextStyle
