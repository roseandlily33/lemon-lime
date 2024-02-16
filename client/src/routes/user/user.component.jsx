import { UserContainer} from "./user.styles";
import CreateRecipe from "./createRecipe/userRecipe.component";
import { NavLink } from "react-router-dom";
const UserHome = ({ httpCreateRecipe }) => {
    
    return ( 
        <UserContainer>
          <CreateRecipe httpCreateRecipe={httpCreateRecipe}/>
        </UserContainer>
     );
}
 
export default UserHome;