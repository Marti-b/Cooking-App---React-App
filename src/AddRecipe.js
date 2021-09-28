import { useState } from 'react';


function AddRecipe(props) {
    const [input, setInput] = useState("");
    console.log("Props of Addrecipe", props);

    return(
        <>
        <h3>Add Recipe to the list</h3>
            <input 
                type="text" 
                value={input} 
                onChange={(event) => {
                    setInput(event.target.value);
                }} 
            />
            <button 
                onClick={() => {
                    props.addRecipe(input);
                    setInput("")
          }}>
              Add recipe
              </button>
        </>
    )
}
export default AddRecipe;