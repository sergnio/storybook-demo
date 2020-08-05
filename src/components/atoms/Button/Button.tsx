import React from 'react'
import MuiButton from '@material-ui/core/Button/Button'

export default ({children, variant = "contained", background, ...rest}: any) =>
    <MuiButton variant={variant} style={{background}} {...rest}>{children}</MuiButton>