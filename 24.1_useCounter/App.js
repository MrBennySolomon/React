import useCounter from './hooks/useCounter'

const App = () => {  
  const {
    counter,
    addOne,
    removeOne,
    double,
    divide
  } = useCounter(5);

  const oneAdded= addOne()
  const oneRemoved= removeOne()
  const doubled= double()

  return(
    <>
      <h2>{counter}</h2>
      <h2>{oneRemoved}</h2>
      <h2>{removeOne}</h2>
      <h2>{double}</h2>
      <h2>{divide}</h2>
    </>
  )
  
};
export default App;