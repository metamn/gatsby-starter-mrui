import React from 'react'
import { css } from 'styled-components'
import theme from '../Theme'
import WebFont from 'webfontloader'

const Font = (variant = 'default') => {
    const font = theme.fonts[variant]

    WebFont.load(font.source)

    return css`
        ${font.css}
    `
}

export default Font
