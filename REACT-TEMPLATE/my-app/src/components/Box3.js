import Box4 from "./Box4"

const Box3 = () => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',

        backgroundColor: 'lightcoral',
        width: '30vw',
        height: '30vh'
      }}>
        <Box4/>
        <Box4/>
      </div>
    )
  }
  
  export default Box3