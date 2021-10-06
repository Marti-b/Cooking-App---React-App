import { useState } from 'react';


function AddRecipe(props) {

    const {addRecipe} = props;

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [ingredients, setIngredients] = useState("");
    console.log("Props of Addrecipe", props);

    return(
    
        <div className="add-recipes">
            <h3>Add Recipe to the list</h3>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    id="title"
                    onChange={(event) => setTitle(event.target.value)}
                    type="text"
                />
            </div>
        <div>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    onChange={(event) => setDesc(event.target.value)}></textarea>
        </div>
        <div>
                <label htmlFor="title">Ingredients</label>
                <input
                    name="ingredients"
                    id="ingredients"
                    onChange={(event) => setIngredients(event.target.value)}
                    type="text"
                />
        </div>
            <button
            type="submit"
            onClick= {(event) =>{
                const ingredientsArray = ingredients
                    // Split on comma
                    .split(",")
                    // Trim extraneous whitespace
                    .map((item) => item.trim())
                    // Filter out empty strings (i.e. from extra commas in the input)
                    .filter((item) => item !== "");

                addRecipe(title, desc, ingredientsArray)
            }}>
                Add Recipe
            </button>   
        </div>
     
    );
}
export default AddRecipe;