import React from 'react'

const Theme = {
	colors: {
		scheme: {
			light: {
				text: 'black',
				background: 'snow',
			},
			dark: {
				text: 'white',
				background: 'black',
			},
		},
		pairs: {
			normal: {
				text: 'text',
				background: 'background',
			},
			inverted: {
				text: 'background',
				background: 'text',
			}
		}
	},
	fonts: {
		body: {
			css: `
				font-family: nimbus-sans, sans-serif;
				letter-spacing: 1px;
			`,
			source: {
				typekit: {
					id: 'syb1owt',
				},
			}
		}
	},
	scale: {
		base: [1],
		ratio: 1.25,
	},
	text: {
		body: {
			font: 'body',
		},
		headline: {
			font: 'body',
			scale: 10,
		}
	}
};

export default Theme
