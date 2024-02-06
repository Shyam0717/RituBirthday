/* eslint-disable no-undef */
// PhotoGalleryPage.js
import '../styles/photogallery.css'; // Import your component-specific styling file
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhotoGalleryPage = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleNextPage = () => {
        // Use navigate to go to the /gallery page
        navigate('/quiz');
    };

  // Generate an array of photo file names (assuming you have files named 1.jpg, 2.jpg, ..., 16.jpg)
  const photoFileNames = Array.from({ length: 16 }, (_, index) => `${index + 1}.jpg`);

  // Array of captions for each photo
  const captions = [
    'The most cutest smile ever 🌟',
    'I don\'t mind giving you my heart 💖',
    'Goofy you 😂',
    'just wanna get lost in your eyes 😍',
    'I can just look at you all day long 🥰',
    'Couldn\'t ignore this one 😂',
    'Wish I could have more dosa with you 😋',
    'Who in the world is this cute? 😘',
    'I love how crazy you are, and I love you for that 🤪',
    'Daaku mangal singh 😂',
    'Gosh just look at you, my heart is melting 🥺',
    'How can someone be so cute? 😍',
    'I want you to cook something for me or should I eat you instead? 😂',
    'I just miss these days we had together 😔',
    'Just look at you, you have grown out to be so beautiful and sexy 🌸',
    'I just love you so much, I can\'t even express it in words, Just wish to be with You 🥺',
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const goToNextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photoFileNames.length);
  };

  const goToPrevPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + photoFileNames.length) % photoFileNames.length);
  };

  return (
    <div className="photo-gallery-page">
      <h1>Photo Gallery</h1>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={`/images/${photoFileNames[currentPhoto]}`} alt={`Photo ${currentPhoto + 1}`} />
          <div className="caption-overlay">
            <p>{captions[currentPhoto]}</p>
          </div>
        </div>
        <div className="navigation-buttons">
          <button onClick={goToPrevPhoto}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>


          </button>
          <button onClick={goToNextPhoto}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          </button>
        </div>
      </div>
      {/* Next page button */}
      <button className="next-button" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
};

export default PhotoGalleryPage;




//2 PhotoGalleryPage.js
// import '../styles/photogallery.css'; // Import your component-specific styling file

// const PhotoGalleryPage = () => {
//   // Generate an array of photo file names (assuming you have files named 1.jpg, 2.jpg, ..., 16.jpg)
//   const photoFileNames = Array.from({ length: 16 }, (_, index) => `${index + 1}.jpg`);

//   // Array of captions for each photo
//   const captions = [
//     'Caption for Photo 1',
//     'Caption for Photo 2',
//     'Caption for Photo 3',
//     'Caption for Photo 4',
//     'Caption for Photo 5',
//     'Caption for Photo 6',
//     'Caption for Photo 7',
//     'Caption for Photo 8',
//     'Caption for Photo 9',
//     'Caption for Photo 10',
//     'Caption for Photo 11',
//     'Caption for Photo 12',
//     'Caption for Photo 13',
//     'Caption for Photo 14',
//     'Caption for Photo 15',
//     'Caption for Photo 16',
//     // Add more captions as needed
//   ];

//   return (
//     <div className="photo-gallery-page">
//       <h1>Photo Gallery</h1>
//       <div className="gallery-container">
//         {photoFileNames.map((fileName, index) => (
//           <div key={index} className="gallery-item">
//             <img src={`/images/${fileName}`} alt={`Photo ${index + 1}`} />
//             <div className="caption-overlay">
//               <p>{captions[index]}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGalleryPage;


// 1
// // PhotoGalleryPage.js
// import '../styles/photogallery.css'; // Import your component-specific styling file

// const PhotoGalleryPage = () => {
//   // Dummy data for photo URLs and captions
//   const photos = [
//     { url: 'url_to_photo_1.jpg', caption: 'Caption for Photo 1' },
//     { url: 'url_to_photo_2.jpg', caption: 'Caption for Photo 2' },
//     // Add more photos as needed
//   ];

//   return (
//     <div className="photo-gallery-page">
//       <h1>Photo Gallery</h1>
//       <div className="gallery-container">
//         {photos.map((photo, index) => (
//           <div key={index} className="gallery-item">
//             <img src={photo.url} alt={`Photo ${index + 1}`} />
//             <div className="caption-overlay">
//               <p>{photo.caption}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGalleryPage;
