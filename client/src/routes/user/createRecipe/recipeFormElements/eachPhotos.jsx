
//Displays Each photo for the create page 
const EachPhoto = ({photos}) => {
    return (
        <>
            {photos?.map(url => <img src={url} alt="images uploaded" />)}
        </>
      );
}
 
export default EachPhoto;