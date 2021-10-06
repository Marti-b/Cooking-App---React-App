import { Link } from "@reach/router";

function Recipe(props){
    const recipe = props.getRecipe(props.id);

    // console.log(recipe);
    // console.log(props);
    return(
        <> <h2>{recipe.title}</h2>
        <h4>Cooking time: {recipe.cookingTime}</h4>
        <h5> Recipe difficulty: {recipe.cookingTime < 25 ? "Easy" : "Hard"}</h5>
        

        <p>Ingredients: {recipe.ingredients?.map((ingredient, index) => {
            return(
                <li key={index}><Link to={`/with/${ingredient}`}> {ingredient} </Link></li>
            )
        })}</p>

        <p>{recipe.description}</p>
        </>
       
    )
}
export default Recipe;