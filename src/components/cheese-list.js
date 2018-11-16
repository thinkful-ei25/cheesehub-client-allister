import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
    
    componentDidMount() {
        console.log('Component Did Mount')
        this.props.dispatch(fetchCheeses())
    }
    
    render () {
        console.log(this.props.cheeses)
        let cheeseList = this.props.cheeses.map((cheese, index) => {
            return <li key={index}>{cheese}</li>
        })

    
    return (
        
        <ul>{cheeseList}</ul>
    )
}
}


export const mapStatetoProps = (state) => {
    console.log(state)
    return {
        cheeses : state.cheeses
    }
}



export default connect(mapStatetoProps)(CheeseList)