import React from 'react'

const Title = ({name, subTitle}) => {
    console.log(name, subTitle)
    return (
        <div>
            <div>{name}</div>
            {/* <div>{subTitle}</div> */}
            {subTitle ? <h2>{subTitle}</h2> : <p>no sub title</p>}
        </div>

    )
}

export default Title