import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { getSignsData } from './index.redux';
import SignButton from './UiComponent/button'



// const mapStateToProps = state => {
//   console.log(state.funcitonCommand)
//   return state.funcitonCommand;
// }
// connect(mapStateToProps,{ getSignsData })
@connect(state=>state.functionCommand,{ getSignsData })

class App extends Component {
  // componentWillMount(){
  //   console.log(this.props);
  // }

  render() {
    //console.log(this)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <SignButton onClick={()=>this.this.props.getSignsData}/> 
        <Paper>Signs: {this.props.payload?this.props.payload:null}</Paper>


      </div>
    );
  }
}

export default App;
