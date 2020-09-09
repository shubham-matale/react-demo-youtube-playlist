import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

export default class VideoList extends Component{
    render(){
        return(
          <Row>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Video Id</th>
          <th>Video Name</th>
          <th>Play</th>
        </tr>
      </thead>
      <tbody>
        {this.props.videoList.map(item => (       
        <tr>
          <td>1</td>
          <td>{item.videoid}</td>
          <td>{item.name}</td>
            <td><button>Play</button></td>
        </tr>
        ))}
      </tbody>
    </Table> 
          </Row>
        )
      }
}