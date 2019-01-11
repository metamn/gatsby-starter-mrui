import React from 'react'
import { css } from "styled-components"
import theme from '../Theme'

// Note: when using PropTypes and default props lots of errors popped up I cannot fix ...
// So using this kind of argument passing for now

const Color = (pair = 'normal', scheme = 'light') => {
	const colors = theme.colors
	const colorScheme = colors.scheme[scheme]
	const colorPair = colors.pairs[pair]

	return css`
		background-color: ${colorScheme[colorPair['background']]};
		color: ${colorScheme[colorPair['text']]};
	`
}

export default Color
