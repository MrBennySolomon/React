import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor () {
    super();
    this.state={
      countries:[],
      temp:[]
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const arr = [];
      const response = await axios.get('https://restcountries.com/v3.1/all')
                      .then((res) => {
                        this.setState({
                          countries: res.data,
                          temp: res.data
                        });
                        console.log('state', this.state.countries)
                      })
    } catch (error) {
      console.log('Oops, something went wrong')
      console.log(error)
    }
  }

  changeHandler = (e) => {
    const filtered = this.state.countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase());
    });

    this.setState({
      temp: filtered
    })
  }

  render() {
    return (
        <>
          <input onChange={this.changeHandler}/>
          <ul>
            {this.state.temp.map((state) => {
              return <li key={state.name.common}>{state.name.common}</li>
            })}
          </ul>

        </>
      )
  }
}
export default App;
// const App = () => {
//   const [users, setUsers] = useState([])
//   const [currentUsers, setCurrentUsers] = useState([])
//   const inputRef = useRef(null)
  
//   let response = []

//   const fetchData = async () => {
//     try {
//       response = await axios.get('https://randomuser.me/api/?results=10')

//       setUsers(response.data.results)
//       setCurrentUsers(response.data.results)
      
//     } catch (error) {
//       console.log('Oops, something went wrong')
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//     inputRef.current.focus()
//   },[])
  
//   return (
//     <>
//     <Input onInputChange={setCurrentUsers} users={users} inputRef={inputRef}/>

//     {currentUsers.map((user) => {
//       return (
//         <Card 
//         key={user.cell} 
//         username={`${user.name.title} ` + `${user.name.first} ` + user.name.last}
//         userAvatar={user.picture.large}
//         />
//       )
//     })}
//     </>
//   )
// }
// export default App;