import React from 'react';
import CheeseList from './components/cheese-list'
export default function App () {
  return (
    <div>
      <CheeseList cheeses={[
      "Bath Blue",
      "Barkham Blue",
      "Buxton Blue"
  ]}/>
    </div>
  )
}
