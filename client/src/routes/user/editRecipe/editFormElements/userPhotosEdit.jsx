import ImageUploading from 'react-images-uploading';
import { useState } from 'react';

const UserEditPhotos = ({formValues, setFormValues, maxNumber}) => {
    const [img, setImg] = useState();
    console.log("Form values", formValues, formValues.images);
   // console.log('Images coming in', images);

    // const setPhotoValues = (e) => {
    //     console.log('Settting photo', e);
    //     const newPhoto = e;
    //     setImg([...img, newPhoto]);
    //     setFormValues({...formValues, images: img});
    //     console.log('Final Form for images', formValues)
    // }
    const [images, setImages] = useState(formValues.images);
      const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
      setFormValues({...formValues, images: img});
        console.log('Final Form for images', formValues)
      };
    
    return ( 
        <>
        {/* Images  */}
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => {
            console.log('Img list', imageList)
            setImg(imageList);
            return (
                (
            
                    // write your building UI
                    <div className="options">
                      <div className='buttonContainer'>
                      <button 
                        style={isDragging ? { color: 'orange' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Click or Drop here
                      </button>
                      &nbsp;
                      <button onClick={onImageRemoveAll}>Remove all images</button>
                      </div>
                      <div className='items'>
                      {imageList.map((image, index) => {
                        console.log('Image list', imageList)
                        console.log('Image', image)
                        return (
                        
                            <div key={index} className="image-item">
                              <img src={image['data_url']} alt="" width="100" />
                              <div className="image-options">
                                <button onClick={() => onImageUpdate(index)}>Update</button>
                                <button onClick={() => onImageRemove(index)}>Remove</button>
                              </div>
                            </div>
                          )
                      })}
                      </div>
                    </div>
                  )
            )
          }}
        </ImageUploading>
        </>
     );
}
 
export default UserEditPhotos;