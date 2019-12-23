import React, {Component} from 'react';
import Hello from './todo/todo';
import NavBar from './router/nav-bar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './router/home';
import Skill from './PreSkill/Skill';
import SkillInput from './router/skill'


class App extends Component {
  state = {
    item : [],
    Skill:[]
  }

  addItem = (item) =>{
      item.id = Math.random();
      let combine = [...this.state.item, item]
      this.setState({
        item: combine
      })
  }

  addSkill = (skill) =>{
      skill.id = Math.random();
      let combine = [...this.state.Skill, skill]
      this.setState({
        Skill: combine
      })
  }

  deleteItem = (id) =>{
      let del = this.state.item.filter(item => {
        return item.id !== id
      })
      this.setState({
        item: del
      })
  }

  deleteSkill = (id) =>{
      let del = this.state.Skill.filter(skill => {
        return skill.id !== id
      })
      this.setState({
        Skill: del
      })
  }
  render(){

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
            welcome to pseudo programmer <br></br>
            Learn react or take a bath


          <div className = "row justify-content-between">     
            <div className = "col-md-3 container leftSide border p-0 ml-0 mr-5">  
              <Hello items = {this.state.item} delete = {this.deleteItem}/>
            </div>
            
            
            <div className = "col-md-3 align-middle">
              <Route 
                path ='/home' 
                render = {(props) => <Home {...props} addItem = {this.addItem}/>}
              />
              <Route
                path ='/skill'
                render = {(props) => <SkillInput {...props} addSkill = {this.addSkill} />}
              />


            </div>
          
            
            <div className = "col-md-3 container leftSide border p-0 ml-0 mr-0 ">
              <Skill skill = {this.state.Skill} delete = {this.deleteSkill}/>
            </div> 
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
