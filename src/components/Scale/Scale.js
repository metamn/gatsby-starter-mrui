import React from 'react'
import { css } from 'styled-components'
import theme from '../Theme'
import ms from 'modularscale-js'

const Scale = (scale = 0) => {
	const settings = theme.Scale
	const size = `${ms(scale, settings)}em`

	// return css`font-size: ${size}` gives a strange error

	return {
		fontSize: size
	}
}

export default Scale
