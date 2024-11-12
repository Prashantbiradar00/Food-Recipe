import React from "react"
import { useState, useEffect } from "react"
import Recipe from "./Recipe";

function App() {

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(null);
  const [searched, setSearched] = useState(false);
  const [message, setMessage] = useState("")

  useEffect(() => {
    if(query){
      getRecipe()
    }
    
  },[query])
 
 const getRecipe = async () => {
  if(search.length !== ""){
  const response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  const data = await response.json()
    setRecipe(data.meals || [])
  }
  
    return <p>Please Enter Text</p>
  
 }

 const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
 }

 console.log(recipe)

 const handleSubmit = (e) => {
  e.preventDefault();
  if (search.trim() === "") {
    setMessage("Please enter text"); // Set error message if search is empty
    setRecipe([]); // Clear previous search results
    setSearched(false)
  }
  setQuery(search)
  setSearch("")
  
 }
  
 
  return (
    <>
      <div className="main">
      <h1 className="heading">Food Recipe</h1>
      <p>Every Food Recipe at Your Finger Tip</p>

      </div>
      <form onSubmit={handleSubmit}>
        <input type="search" value={search} onChange={handleSearch} placeholder="enter food"  />
        <button className="btn-submit" type="submit">Search</button>
      </form>
      
      <div className="food">
          {/* Display recipes if there are any, otherwise show "No recipes found" if a search was performed */}
          {searched && recipes.length === 0 ? (
            <p className="no-items">No recipes found</p>
          ) : (
            recipe.map((item) => (
              <Recipe key={item.idMeal} item={item}  />
            ))
          )}
        </div>
    </>
    
  )
}

export default App
