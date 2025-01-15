/* eslint-disable react/prop-types */

const HoverCounter = ({count, incrementCount}) => {
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
    )
}

export default HoverCounter;