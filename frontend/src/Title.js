import React from 'react'

const Title = (props) => {
    console.log(props)
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.subTitle}</div>
        </div>

    )
}

export default Title