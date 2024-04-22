// import { useState, useEffect } from "react";
// import Compressor from "compressorjs";
// import Loader from "../Loader/loader.component";
// const CompressedPicture = ({img}) => {
//    //console.log('Incoming image', img)
//     const [compressedImageUrl, setCompressedImageUrl] = useState(null);
//    const [isLoading, setIsLoading] = useState(true);

//    useEffect(() => {
//     const compressImage = async () => {
//       try {
//         const compressedBlob = await new Promise((resolve, reject) => {
//           new Compressor(img, {
//             quality: 0.6, 
//             maxWidth: 250, 
//             maxHeight: 150, 
//            //mimeType: "image/jpeg", 
//             success(result) {
//               resolve('Success Picture', result);
//             },
//             error(error) {
//               console.log('Error picture', error)
//               reject(error);
//             },
//           });
//         });
//         console.log('Compressed Blob', compressedBlob);
//         setCompressedImageUrl(URL.createObjectURL(compressedBlob));
//         console.log('Final compressed', compressedImageUrl)
//         setIsLoading(false);
//       } catch (error) {
//         console.error(error);
//         setIsLoading(false);
//       }
//     };
//     compressImage();
//   }, [img, compressedImageUrl]);
//     return (<>
//     {isLoading ? <Loader /> :  <img src={compressedImageUrl} alt="userPhoto" className="recipePhoto"/>}
//     </> );
// }
 
// export default CompressedPicture;