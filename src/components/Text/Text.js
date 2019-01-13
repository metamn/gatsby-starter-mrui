import React from 'react'
import { css } from 'styled-components'
import theme from '../Theme'

import Font from '../Font'
import Scale from '../Scale'

const Text = (style = 'body') => {
    const text = theme.text[style]
    if (!text) return

    let ret = ''

    ret += text.scale
        ? css`
              ${Scale(text.scale)}
          `
        : ''
    ret += text.font
        ? css`
              ${Font(text.font)}
          `
        : ''

    return ret
}

export default Text
