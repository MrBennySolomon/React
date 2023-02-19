import React, { useRef } from 'react';
import './App.css';

const img1 = 'https://images.pokemontcg.io/base1/24.png'
const img2 = 'https://images.pokemontcg.io/base1/4.png'
const img3 = 'https://images.pokemontcg.io/base1/42.png'
const img4 = 'https://images.pokemontcg.io/base1/2.png'

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img 
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg={img1}
        secondaryImg={img2}
        alt="" />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver
        primaryImg={img3}
        secondaryImg={img4}
        alt="" />
    </div>
  )
}

const App = () => {

  return (
    <div>
      <ImageChangeOnMouseOver/>
    </div>
  );
};

export default App;


// import React, { useRef } from 'react';

// const ClassToggleOnMouseOver = ({primaryClass}) => {
//   const classRef = useRef(null)

//   return (
//     <div
//       onMouseOver={() => {
//         classRef.current.classList.add("color")
//       }}
//       onMouseOut={() => {
//         classRef.current.classList.remove("color")
//       }}
//       className = {primaryClass}
//       ref={classRef}
//     />
//   )

// }

// const ClassChangeOnMouseOver = () => {
//   return (
//     <>
//       <ClassToggleOnMouseOver primaryClass = {"one"} />
//       <ClassToggleOnMouseOver primaryClass = {"two"} />
//     </>
//   )
// }



// const App = () => {

//   return (
//       <ClassChangeOnMouseOver/>
//   )
// }

// export default App;