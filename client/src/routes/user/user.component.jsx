import { UserContainer} from "./user.styles";
import CreateRecipe from "./createRecipe/userRecipe.component";
const UserHome = ({ httpCreateRecipe }) => {
    return ( 
        <UserContainer>
          <CreateRecipe httpCreateRecipe={httpCreateRecipe}/>
        </UserContainer>
     );
}
 
export default UserHome;