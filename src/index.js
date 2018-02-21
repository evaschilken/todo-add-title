// todo: add meaningful title

import React from 'react';
import ReactDOM from 'react-dom';
import Helpers from './helper.js';
import textData from './textdata.json';
import './index.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image : {
        location: {
          top: Helpers.getRandomInt(300) + 'px',
          left: Helpers.getRandomInt(300) + 'px'
        },
        source: './img/img1.jpg'
      }
    };
  }

  componentDidMount() {
    console.log('componentDidMount called')
    this.timerID = setInterval(
      () => this.changeImage(),
      5000
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called')
    clearInterval(this.timerID);
  }

  changeImage() {
      console.log('changeImage called')
      this.setState({
        image : {
          location: {
            top: Helpers.getRandomInt(300) + 'px',
            left: Helpers.getRandomInt(300) + 'px'
          },
          source: './img/img'+Helpers.getRandomInt(3)+'.jpg'
        }
      });
  }

  render() {
    return(
      <img
        className="imageComp"
        src={this.state.image.source}
        style={this.state.image.location}
        title='test'
        alt='test'>
      </img>)
    }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : {
        location: {
          top: Helpers.getRandomInt(300) + 'px',
          left: Helpers.getRandomInt(300) + 'px'
        },
        index: Helpers.getRandomInt(3)
      }
    };
  }

  componentDidMount() {
    console.log('componentDidMount called')
    this.timerID = setInterval(
      () => this.changeText(),
      5000
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called')
    clearInterval(this.timerID);
  }

  changeText() {
    console.log('changeText called')

    this.setState({
      text : {
        location: {
          top: Helpers.getRandomInt(300) + 'px',
          left: Helpers.getRandomInt(300) + 'px'
        },
        index: Helpers.getRandomInt(3)
      }
    });
  }

  render() {

    return(
      <div className="textComp" style={this.state.text.location}>
        {textData[this.state.text.index].content}
      </div>)
    }
}



class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  // }


  render() {
    return(
      <div className="myCanvas">
        <Image/>
        <Image/>
        <Image/>
        <Text/>
        <Text/>
        <Text/>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
