
const EachPhotoCreate = ({photos}) => {
    return ( 
        <>
        <div className="items" style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
            {photos?.map(url => <img style={{borderRadius: '5px'}} src={url} alt="images uploaded" />)}
        </div>
        </>
     );
}
 
export default EachPhotoCreate;