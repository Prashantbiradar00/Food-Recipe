import React from 'react'

function Recipe({item}) {
    const { strMeal: text, strMealThumb: image, strInstructions: para, strArea: area, strYoutube:youtube } = item;

    return (
    <div className='food-box'>
      <p className='name'>{text}</p>
      <img  className="img" src={image} alt={text} />
      <p className='origin'>Origin: {area}</p>
      <p className='info'>{para}</p>
      <footer>
      <p className='yt'>for video tutorial:</p>
       <a href={youtube}>watch</a>
        </footer>
    </div>
    
  )
}

export default Recipe
