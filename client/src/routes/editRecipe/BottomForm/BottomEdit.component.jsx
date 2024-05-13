import PhotosCreate from "../../createRecipe/BottomForm/PhotosCreate.component";
import EachPhotoCreate from "../../createRecipe/BottomForm/EachPhoto.component";

const BottomEdit = ({images, addNewImage, addNewPhotos, photos}) => {
    return ( 
        <>
       <PhotosCreate images={images} addNewImage={addNewImage} addNewPhotos={addNewPhotos} />
       <EachPhotoCreate  photos={photos}/> 
       <hr/>
        </>
     );
}
 
export default BottomEdit;