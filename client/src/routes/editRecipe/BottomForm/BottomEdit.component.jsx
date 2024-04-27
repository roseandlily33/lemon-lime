import ImagesEdit from "./ImagesEdit.component";
import EachPhotoEdit from "./EachPhotoEdit.component";

const BottomEdit = ({images, addNewImage, addNewPhotos, photos}) => {
    return ( 
        <>
        <h2>Bottom</h2>
        <ImagesEdit images={images} addNewImage={addNewImage} addNewPhotos={addNewPhotos}/>
        <EachPhotoEdit photos={photos}/>
        </>
     );
}
 
export default BottomEdit;