import React from 'react';
import './App.css';
// import { useEffect, useRef } from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      class1: "",
      class2: "",
      class3: ""
    };
  }

  componentDidMount = () => {
      this.setState(() => {
        return { class1: "box1", class2: "box2", class3: "box3",};
    });

    setTimeout(() => {
      this.setState(() => ({ class1: "", class2: "", class3: "", }));
    }, 4000);
  };

  render() {
    return (
      <div className='App.css'>
        <div className={this.state.class1}></div>
        <div className={this.state.class2}></div>
        <div className={this.state.class3}></div>
      </div>
      )
  }

}
// const App = () => {

//   const refDiv1 = useRef(null);
//   const refDiv2 = useRef(null);
//   const refDiv3 = useRef(null);

//   useEffect(() => {
//     let timerId1;
//     let timerId2;

//     timerId1 = setTimeout(() => {
      
//       refDiv1.current.classList.add('box1');
//       refDiv2.current.classList.add('box2');
//       refDiv3.current.classList.add('box3');

//     }, 1000);
//     timerId2 = setTimeout(() => {
      
//       refDiv1.current.classList.remove('box1');
//       refDiv2.current.classList.remove('box2');
//       refDiv3.current.classList.remove('box3');
      
//     }, 4000);

//     return () => {
//       timerId1 && clearTimeout(timerId1);
//       timerId2 && clearTimeout(timerId2);
//     }
//   },[]);


//   return (
//     <div className='App.css'>
//       <div ref={refDiv1}></div>
//       <div ref={refDiv2}></div>
//       <div ref={refDiv3}></div>
//     </div>
//   );
// };

export default App;