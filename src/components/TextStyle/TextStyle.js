import React from 'react'
import Font from '../Font'
import Color from '../Color'

const TextStyle = (style) => {
	switch (style) {
		case '':

			break;
		case 'body':
		default:
			return (
				Font(),
				Color()
			)
	}
}

export default TextStyle
