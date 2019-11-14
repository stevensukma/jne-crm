import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import styled from "styled-components";
import { Progress } from 'react-sweet-progress';
import { Button } from 'reactstrap';
import "react-sweet-progress/lib/style.css";

class Transaction extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginBottom: "50px"}}>
        <div style={{ color: "#999"}}>Nomor Resi: 1231238819293801231</div>
        <Row style={{ marginTop: "10px", marginBottom: "20px"}}>
          <Col>
              <div style={{ color: "#999"}}>Pengirim:</div>
              <div>Nama Pengirim Ganteng</div>
              <div>Bandung</div>
          </Col>
          <Col>
          <div>
            <div style={{ color: "#999"}} >Penerima:</div>
            <div>Nama penerima Huyu</div>
            <div>Jakarta</div>
          </div>
          </Col>
        </Row>
        <Progress percent={50}/>
        <div>Status: In Progress</div>
        <Button onClick={this.props.onShowMore} color="secondary" size="lg" block>Show More</Button>
      </div>
    )
  }
}

export default Transaction;