import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Container} from 'react-bootstrap';
import VideoList from './videoList';

export class AddVideo extends Component {
  constructor() {
    super();
   this.state = { items: [{videoid:'JJmcL1N2KQs','name':'Python - with traversy media'}], videoid: '',name:'', selectedId:'JJmcL1N2KQs' };
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.addVideoId = this.addVideoId.bind(this);
  }
  
  
  
  render(){
    return(
    <Container><Row>
        <form onSubmit={this.addVideoId}>
          <label htmlFor="new-todo">
            Video Id
          </label>
          <input
            id="new-todo"
            onChange={this.handleIdChange}
            value={this.state.videoid}
          />
          <br/>
          <label htmlFor="name">
            Video Name
          </label>
          <input
            id="name"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <br/>
          <button>
          <Button>
            Add Video TO List
          </Button>
          </button>
        </form>
        
        </Row>
        <Row>
          <VideoList videoList={this.state.items} onPlayClick={this.handlePlay} onRemove={this.removeVideo}/>
        </Row>
        </Container>
        
      
      
          )
  }

  removeVideo = (index)=>{
    let videoData = this.state.items;
    console.log(videoData)
    videoData.splice(index,1);
    console.log('sdf',videoData);
    this.setState( state=>({items:videoData}) );
  }
  
  handlePlay = (id) => {
    this.props.videoPlay(id)
  }


  handleIdChange(e) {
    this.setState({ videoid: e.target.value });
  }

  
  handleNameChange(e){
    this.setState({ name: e.target.value });
  }

  addVideoId(e) {
    e.preventDefault();
    if (this.state.videoid.length === 0 ) {
        alert('Please Enter Video Id')
      return;
    }
    if ( this.state.name.length === 0) {
        alert('Please Enter Video Name')
      return;
    }
    const newItem = {
      videoid: this.state.videoid,
      name: this.state.name,
      id:Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
  
}



export default AddVideo;