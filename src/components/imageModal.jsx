import React from 'react';
const ImageModal=({url,toggleImageModal})=>{
return (

 <div id="imageModal" className="modal">

 {/* Modal content */}
  <div className="modal-content"  
     data-dismiss="modal"
      onClick={()=>toggleImageModal(null)}>
     {/* <button
        type="button"
        className="close"
        aria-label="Close"
        data-dismiss="modal"
        onClick={()=>toggleImageModal(null)}
    >&times;</button> */}
          
    <img
    alt="A Case"
    className="image-modal"
      src={url}    
     
    />
    
  </div>

</div>);
};
export default ImageModal;
