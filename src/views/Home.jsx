import React, { useEffect } from 'react'
import ItemList from '../components/ItemList'
import Navegacion from '../components/Navegacion'

function Home() {
    return (
        <div>
            <Navegacion/>
            <ItemList/>
        </div>
    )
}

export default Home