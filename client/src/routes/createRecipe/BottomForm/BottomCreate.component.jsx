import EachPhotoCreate from "./EachPhoto.component";
import PhotosCreate from "./PhotosCreate.component";

const BottomCreate = ({images, addNewImage, addNewPhotos, photos}) => {
    return (
        <>
        <PhotosCreate images={images} addNewImage={addNewImage} addNewPhotos={addNewPhotos}/>
        <EachPhotoCreate  photos={photos}/> 
        </>
      );
}
 
export default BottomCreate;