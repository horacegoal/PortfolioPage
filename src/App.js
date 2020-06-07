import React from 'react';
import './App.css';
import Display from './Display.js';
import Button from './Button.js';
import screen1 from './screen1.png';
import myproject from './myprojects2.png';
import { CSSTransition } from 'react-transition-group';
import ListItem from './ListItem';
import MoveTile from './MoveTile';
import Box from './Box.js';

import appdemo1 from './appdemo1.gif';
import appdemo2 from './appdemo2.gif';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      in: true,
      w: null,
      h: null,
      top: null,
      imgSrc: appdemo1,
      link: 'https://play.google.com/store/apps/details?id=com.happyusingapp.tagyourphotos'
    }
  }

  componentDidMount() {
    // let app1 = document.querySelector('#red');
    // this.setState({
    //   w: app1.clientWidth,
    //   h: app1.clientHeight,
    //   top: app1.clientHeight
    // })
  }

  onChangeImg1 = () => {
    this.setState({
      imgSrc: appdemo1,
      link: 'https://play.google.com/store/apps/details?id=com.happyusingapp.tagyourphotos'
    })
  }

  onChangeImg2 = () => {
    this.setState({
      imgSrc: appdemo2,
      link: 'https://expo.io/@standwithhongkong/trainingrecorder'
    })
  }


  render() {

    return (
      <div style={{
        display: 'relative'
      }}>
        <div className="App" style={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: 3
        }}>
          <div style={{
            // marginLeft: 20,
            color: 'white',
            // border: '1px solid white',
            width: '150px',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'

          }}>
            Horace Hung
          </div>
          <div style={{
            fontSize: 30,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)'


          }}>
            <div  >
              <Box delay={0} text={'App1'} myid={'app1'} delay={0} onChangeImg={this.onChangeImg1} />
              <Box delay={0} text={'App2'} myid={'app3'} delay={800} last={true} onChangeImg={this.onChangeImg2} />
              {/* <Box delay={0} text={'App3'} myid={'app3'} delay={1600} last={true} /> */}

            </div>
          </div>

          <div style={{
            margin: 'auto'
          }}>

            <Display imgSrc={this.state.imgSrc} link={this.state.link}/>

          </div>

        </div >

      </div>

    );
  }

}

export default App;
