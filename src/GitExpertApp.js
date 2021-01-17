import React, {useState} from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';
export const GitExpertApp= ()=>{

    const [categories, setcategories] = useState(['One Punch'])

    return (
        <>
        <h2>GitExpertApp</h2>
        <hr/>
        <AddCategories setCategories={setcategories}/>
        <ol>
             {
                 categories.map(category => (
                    
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                 ))
             }
        </ol>
        </>
    )
}

