import React, { Component } from 'react';
import apiKeys from '../constants/Constant'

class App extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.getWeather = this.getWeather.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.verifyZip = this.verifyZip.bind(this)
    this.getLoc = this.getLoc.bind(this)
    this.state ={
      zip: null,
      location: "Please enter a valid zip code.",
      lat: null,
      lng: null
    }
  }
  handleChange(event){
    this.setState({zip: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    this.verifyZip()
  }
  verifyZip(){

    if (this.state.zip.length == 5){
      this.getLoc()
      this.setState({ location: 'Fetching location data...'})
    } else {
      this.setState({ location: "Please enter a valid zip code." })
    }
  }
  getLoc() {
    let fetchUrl = `https://www.zipcodeapi.com/rest/${apiKeys.zipKey}/info.json/${this.state.zip}/degrees`
    fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
    return response
    })
    .then(response =>{
      let promise = response.json()
      return promise
    })
    .then(promise =>{
      this.setState({
        location: `${promise.city}, ${promise.state}`,
        lat: `${promise.lat}`,
        lng: `${promise.lng}`
      })
      this.getWeather()
    })
    .catch(error => {
      console.log(error)
    })
  }
  getWeather(){
    let fetchUrl = `https://api.darksky.net/forecast/${apiKeys.darkSky}/${this.state.lat},${this.state.lng}`
    fetch(fetchUrl)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
    return response
    })
    .then(response =>{
      let promise = response.json()
      return promise
    })
    .then(data =>{
      debugger
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="zipCode">Zip:</label>
          <input id="zipCode" type="text" value={this.state.value} onChange={this.handleChange} maxLength="5"/>
      </form>
      {this.state.location}
      </div>
    )
  }
}


export default App;
