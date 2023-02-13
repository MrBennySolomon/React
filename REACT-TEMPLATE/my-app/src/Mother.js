import Child from './Child';
import './style.css';
const Mother = (props) => {
  const kids= [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' }
  ];
  return (
    <>
      <h1>"A Tale Of Five Balloons"</h1>
      <div className="balloons-container">
        {kids.map((kid, index) => {
          return (
            <div key={index} className="balloon-item">
              <Child color={kid.color}>
                <h3>{kid.name}</h3>
              </Child>
            </div>
          );
        })};
      </div>
    </>
  )
}

export default Mother