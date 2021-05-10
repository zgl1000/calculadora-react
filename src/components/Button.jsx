import React from 'react'
import './Button.css'

export function Button (props) {
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button>
    )
}