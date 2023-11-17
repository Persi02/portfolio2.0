import React from 'react'
import './style.scss'

interface Isec {
    text: string
}


function SectionTitle({ text }: Isec) {
    return (
        <div className="head_section  wrap">
            <h2>
                {text}
            </h2>
        </div>
    )
}

export default SectionTitle