import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kuroshitsuji']);

   
   /* const handleAdd = () => {
        setCategories ([...categories, 'Kenshin']);
        // setCategories (cats => [...cats, 'Kenshin']);
    }
    */

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>

            {/*<button onClick = {handleAdd}>Agregar</button>*/}

            <ol>
                {
                   categories.map(category => (
                       <GifGrid 
                       key = {category}
                       category = {category} />
                   ),
                       {/*return <li key = {category}> {category} </li>*/}
                   ) 
                }
            </ol>

        </div>
    )
}

export default GifExpertApp
