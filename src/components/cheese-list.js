import React from 'react';

export default function CheeseList(props) {
    console.log(props.cheeses)
    let cheeseList = props.cheeses.map(cheese => {
        return <li>{cheese}</li>
    })
    
    return (
        <ul>{cheeseList}</ul>
    )
}