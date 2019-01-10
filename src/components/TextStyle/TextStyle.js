import React from 'react'
import { css } from "styled-components"

import Font from '../Font'
import Color from '../Color'

const TextStyle = (style) => {
	return css`
		${Color()}
		${Font()}
	`
}

export default TextStyle
