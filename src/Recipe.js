

function Recipe(props){
    //const listOfRecipes = props.props;
    const recipe = props.getRecipe(props.id);
    //const recipe = listOfRecipes.find(props => props.id === listOfRecipes.uniqueId);

    console.log(recipe);
    console.log(props);
    return(
        <> <h2>{recipe.title}</h2>
        <h4>Cooking time: {recipe.cookingTime}</h4>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>{recipe.description}</p>
        </>
       
    )
}
export default Recipe;