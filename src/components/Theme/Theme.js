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
				line-height: 1.48em;
				letter-spacing: 1px;
			`,
			source: {
				typekit: {
					id: 'syb1owt',
				},
			}
		}
	},
};

export default Theme
