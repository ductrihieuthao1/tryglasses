import React, { Component } from 'react'
import './Home.css'
import Model from '../Assets/model.jpg'
import Glass1 from '../Assets/v1.png'
import Glass2 from '../Assets/v2.png'
import Glass3 from '../Assets/v3.png'
import Glass4 from '../Assets/v4.png'
import Glass5 from '../Assets/v5.png'

class Home extends Component {
    state = {
        glassImage: Glass2,
      };
      handleChangeColor = (img) => {
        this.setState({
          glassImage: img,
        });
      };
  render() {
    return (
      <div>
    <h1>TRY GLASSES ONLINE</h1>
        <div className='allModel'>
        <img className='motherModel' src={Model}
        
        
      
        alt="" />
        <img className='glasses' src={this.state.glassImage} alt="" />
      </div>
        <div className='container'>
        <img src={Glass1}    onClick={() => {
            this.handleChangeColor(Glass1);}}
            alt="" />
        <img src={Glass2}  onClick={() => {
            this.handleChangeColor(Glass2);}}
        alt="" />
        <img src={Glass3}  onClick={() => {
            this.handleChangeColor(Glass3);}}
         alt="" />
        <img src={Glass4}  onClick={() => {
            this.handleChangeColor(Glass4);}}
        alt="" />
        <img src={Glass5}  onClick={() => {
            this.handleChangeColor(Glass5);}}
        alt="" />
        </div>
       
      </div>
    )
  }
}

export default Home;