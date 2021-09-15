

function Recipe(props){
    const recipe = props.getRecipe(props.id);

    console.log(recipe);
    console.log(props);
    return(
        <> <h2>{recipe.title}</h2>
        <h4>Cooking time: {recipe.cookingTime}</h4>
        <p>Ingredients: {recipe.ingredients.join(", ")}</p>
        <p>{recipe.description}</p>
        </>
       
    )
}
export default Recipe;