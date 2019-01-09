import React from 'react'
import theme from '../Theme'

const Colors = (props) => {
	return {
		backgroundColor: `${props.background}`,
		color: `${props.text}`,
	}
}

export default Colors
