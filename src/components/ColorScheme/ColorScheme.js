import React from 'react'
import theme from '../Theme'

const ColorScheme = (scheme) => {
	const colors = theme.colors
	let background, text = ''

	switch (scheme) {
		case 'inverted':
			background = colors.text
			text = colors.background
			break
		case 'default':
		default:
			background = colors.background
			text = colors.text
	}

	return {
		backgroundColor: `${background}`,
		color: `${text}`,
	}
}

export default ColorScheme
