import React from 'react'
import '../card-list/Cardlist.css'
import Card from '../Card/Card'
function Cardlist(props) {

    return (
        <div className='card-list'>
            {
                props.monsters.map((monster) => (
                    <Card key={monster.id} monster={monster} />

                ))
            }
        </div>
    )
}

export default Cardlist;