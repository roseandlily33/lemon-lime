import { Cloudinary } from '@cloudinary/url-gen';
const EditPhotos = ({images, addNewImage, addNewPhotos}) => {
    console.log('Edit photos', images)
    const cloud = new Cloudinary({cloud: {cloudName: 'dql7lqwmr'}});
    
    return (  
        <h1>Edit</h1>
    );
}
 
export default EditPhotos;