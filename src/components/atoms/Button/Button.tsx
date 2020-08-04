import React from 'react'
import MuiButton from '@material-ui/core/Button/Button'

export default ({children, variant = "outlined", color = "white", ...rest}: any) =>
    <MuiButton variant={variant} style={{background: color}} {...rest}>{children}</MuiButton>