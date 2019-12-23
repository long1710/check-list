import React from 'react';
import ItemInput from '../todo/ItemInput'
const Home = ({addItem}) =>{
    return(
        <div>
            <ItemInput addItem = {addItem} />
        </div>

    )
}
export default Home;