import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    incrementIfOdd = () => {
        if(this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return(
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}><span role='img' aria-label='plus'>➕</span></button>
                {' '}
                <button onClick={onDecrement}><span role='img' aria-label='plus'>➖</span></button>
                {' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={this.incrementAsync}>Increment with 1 second delay</button>
            </p>
        )
    }

}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter