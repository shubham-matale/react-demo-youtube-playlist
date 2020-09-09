import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

export default class VideoList extends Component{
    constructor(props){
        super(props);
        this.handlePlay = this.handlePlay.bind(this);
        this.removeItem = this.removeItem.bind(this)
    }

    removeItem(index){
        console.log('remove',index)
        if(this.props.videoList.length==1){
            alert('Sorry Default video Can\'t be removed');
            return;
        }else{
            this.props.onRemove(index);
        }
    }
    handlePlay(id){
        console.log(id);
        this.props.onPlayClick(id);
    }
    render(){
        return(
          <Row>
           <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Video Id</th>
                <th>Video Name</th>
                
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.props.videoList.map((item,index) => (       
                <tr>
    <td>{index+1}</td>
                <td>{item.videoid}</td>
                <td>{item.name}</td>
                <td><button onClick={ this.handlePlay.bind(this, item.videoid)}>Play</button><br/>
                <button onClick={ this.removeItem.bind(this, index)}>Remove</button></td>
                </tr>
                ))}
            </tbody>
            </Table> 
          </Row>
        )
      }

      handlePlayEvent(){
          console.log('shubham')
      }
}