import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1.js';

class App extends Component {
  constructor() {
    super();//so we can use this keyword
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    //no code splitting
    // this.setState({route: route});

    //with code splitting
    if(route === 'page1'){
      this.setState({route: route});
    }else if( route === 'page2'){
      import('./components/Page2.js').then((Page2) => {
        this.setState({route: route, component: Page2.default})
      })
    }else if( route === 'page3'){
      import('./components/Page3.js').then((Page3) => {
        this.setState({route: route, component: Page3.default})
      })
    }
  }

  render() {
      // if(this.state.route === 'page1'){
      //   return <Page1 onRouteChange={this.onRouteChange}/>
      // }else if(this.state.route === 'page2'){
      //   return <Page2 onRouteChange={this.onRouteChange}/>
      // }else if(this.state.route === 'page3'){
      //   return <Page3 onRouteChange={this.onRouteChange}/>    
      // }
      if(this.state.route === 'page1'){
        return <Page1 onRouteChange={this.onRouteChange}/>
      }else {
        return <this.state.component onRouteChange={this.onRouteChange} />
      }
  }
}

export default App;
