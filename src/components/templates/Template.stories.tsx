import React from 'react'

import './styles.css'

export default {
    title: "Templates/Template"
};

const defaultStyle = {
    outline: '1px solid #eee',
    backgroundColor: 'rgba(220, 220, 220, .6)',
    minHeight: '200px',
}

export const withProps = () => (
        <div className={"default"} style={defaultStyle}>
            <div className={"hero"} style={defaultStyle}/>
            <div className={"col1"} style={defaultStyle}/>
            <div className={"col2"} style={defaultStyle}/>
        </div>
    )
