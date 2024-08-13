
import React from 'react';
import style from './recipe.module.css';

export default function Recipe({name= 'Nombre random', url="https://media.istockphoto.com/id/1337716828/es/foto/barbacoa-argentina.jpg?s=1024x1024&w=is&k=20&c=wQQavZxKDCNs-qQqX8KnsUP1pxaz2r9G_cZdHYO74kw="}: {name: string, url: string}) {
    return (
    <div className={style.recipeCard}>
        <img src={url} alt={name}/>
        <div className={style.overlay}>
            <h2>{name}</h2>
        </div>
    </div>
    )
}