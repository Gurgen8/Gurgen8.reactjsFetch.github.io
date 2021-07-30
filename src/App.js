import './App.css';
import _  from "lodash"
import React from "react"
import {Component} from "react"
import axios from "axios"


class App extends Component{
   constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      
      
    }
  }

  async componentDidMount() {
     this.fetchRequest()
   }

 
   fetchRequest = async () => {
    this.setState({ loading: true })
    const { data } = await axios.get(`https://reqres.in/api/unknown`).catch(e => {
      return {e}
    });
    this.setState({
      data:data?.data || [],
      loading: false,
      
 
    })
  }



  render(){
    const{data}=this.state
    return <div className="app" > 
     <ul >
          {data.map(obj => (
            <li   style={{background:obj.color}}  key={obj.id}>
              <p>{obj.name }</p>
              <p>{obj.year}</p>
              <p>{obj.pantone_value }</p> 
     
            </li>
          ))}
        </ul>
    </div>
  }

}

export default App