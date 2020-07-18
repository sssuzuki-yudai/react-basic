import React from 'react'

const CountDisplay = ({name, count}) => {
    console.log(`diaplay ${name}`)
    return (
        <div>
            {count}
        </div>
    )
}

export default React.memo(CountDisplay)
