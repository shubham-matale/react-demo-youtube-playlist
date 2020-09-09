import React, { Component } from 'react';

import './App.css';
import AddVideo from './component/addVideo';
import {Row, Col, Container} from 'react-bootstrap';
class App extends Component {
  constructor() {
    super();
    this.state={videoId:'JJmcL1N2KQs'}
  };

  render() {
    return (
    <Container>
      <Row>
        <Col xs={6}>
          <AddVideo videoPlay={this.OnNewVideoPlay}/>
        </Col>
        <Col xs={6}>
          <h1>Video </h1>
          <iframe width="600" height="424" src={'https://www.youtube.com/embed/'+this.state.videoId} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
              
       </Row>
       </Container>
    );
  }

  OnNewVideoPlay = (id)=>{
    this.setState(state=>({
      videoId:id
    }))
  }
}

export default App;
