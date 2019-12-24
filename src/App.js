import React, { Component } from 'react';
import Hello from './todo/todo';
import NavBar from './router/nav-bar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './router/home';
import Skill from './PreSkill/Skill';
import SkillInput from './router/skill'
import Req from './PreSkill/todoReq';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          welcome to pseudo programmer <br></br>
          Learn react or take a bath


          <div className="row justify-content-between">
            <div className="col-md-3 container leftSide border p-0 ml-0 mr-5">
              <Hello />
            </div>


            <div className="col-md-3 align-middle">
              <Route exact path='/' component={Home} />
              <Route path='/skill' component={SkillInput} />
              <Route path='/todo/:todo_id' component={Req} />
            </div>


            <div className="col-md-3 container leftSide border p-0 ml-0 mr-0 ">
              <Skill />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
