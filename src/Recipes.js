import { Link } from "@reach/router";
import App from "./App";

function Recipes(props){

let data = props.props;

    
    
    return( 
        <>
        <h2>Recipies</h2>
        <ul>
                {
                    data.map((item) => {
                        return(
                          <li><Link to={`/recipe/${item.uniqueId}`}> {item.title} </Link></li>
                        )
                    })
                } 
                
    
        </ul>
        
        </>
    )
}  

export default Recipes;