import React, { Component } from 'react';
import Hello from './todo/todo';
import NavigationBar from './router/nav-bar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './router/home';
import Skill from './PreSkill/Skill';
import SkillInput from './router/skill'
import Req from './PreSkill/todoReq';
import Instruction from './router/instruction'

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />

          <div className="row justify-content-between">
            <div className="col-md-3 container leftSide border p-0 ml-0 mr-5 bg-white">
              <Hello />
            </div>


            <div className="col-md-3 align-middle ">
              <Route exact path='/' component={Home} />
              <Route path='/skill' component={SkillInput} />
              <Route path='/todo/:todo_id' component={Req} />
              <Route path='/instruction' component = {Instruction} />
            </div>


            <div className="col-md-3 container leftSide border p-0 ml-5 mr-0 bg-white">
              <Switch>
                <Route path= '/todo/:todo_id' component ={Skill}/>
                <Route path = '/' component ={Skill}/>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
