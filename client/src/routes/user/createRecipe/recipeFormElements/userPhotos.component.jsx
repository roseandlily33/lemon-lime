import ImageUploading from 'react-images-uploading';
import { useState, useEffect } from 'react';
const UserPhotos = ({images, onChange, maxNumber}) => {
  const [totalSize, setTotalSize] = useState(0);
  const [imageError, setImageError] = useState('');
  useEffect(() => {
    let total = 0
    images.map((img) => {
      return total += img.file.size
    })
    if(total > 6000000){
      setImageError('File Size is too big')
    } else {
      setImageError('')
    }
    setTotalSize(total);
  }, [images])
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
          }) => (

            <div className="options">
              <div className='buttonContainer'>
                <h3 style={{color: 'hsl(354, 85%, 44%)'}}>{imageError}</h3>
                <button 
                style={isDragging ? { color: 'orange' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button className="secondaryButton" onClick={onImageRemoveAll}>Remove all images</button>
              </div>
              <div className='items'>
              {imageList.map((image, index) => (
                   <div key={index} className="image-item">
                   <img src={image['data_url']} alt="" width="100" />
                   <div className="image-options">
                     <button onClick={() => onImageUpdate(index)}>Update</button>
                     <button className="secondaryButton" onClick={() => onImageRemove(index)}>Remove</button>
                   </div>
                 </div>
              ))}
              </div>
            </div>
          )}
        </ImageUploading>
        </>
     );
}
 
export default UserPhotos;