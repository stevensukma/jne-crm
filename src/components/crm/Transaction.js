import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import styled from "styled-components";
import { Progress } from 'react-sweet-progress';
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import moment from "moment";
import "react-sweet-progress/lib/style.css";

const Image = styled.img`
  height: 100px;
`

class Transaction extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    }
  }

  toggle = ()  => {
    this.setState({
      modal: !this.state.modal,
    })
  }


  render() {
    console.log(this.props.data)
    return (
      <div style={{ marginBottom: "50px"}}>
        <div style={{ color: "#999"}}>Nomor Resi: {this.props.data.receiptID}</div>
        <Row style={{ marginTop: "10px", marginBottom: "20px"}}>
          <Col>
              <div style={{ color: "#999"}}>Pengirim:</div>
              <div>{this.props.data.sender.accountName}</div>
              <div>{this.props.data.origin}</div>
          </Col>
          <Col>
          <div>
            <div style={{ color: "#999"}} >Penerima:</div>
            <div>{this.props.data.receiver}</div>
            <div>{this.props.data.destination}</div>
          </div>
          </Col>
        </Row>
        <Progress percent={this.props.data.isFinished ? 100 : 50}/>
        <div>Status: {this.props.data.isFinished ? "Done" : "In Progress"}</div>
        <Button onClick={this.toggle} color="secondary" size="lg" block>Show More</Button>
        <Modal
          isOpen={this.state.modal}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Keterangan</th>
                  <th>Bukti</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.data.tracks && this.props.data.tracks.map((item) => {
                    return (
                      <tr>
                        <td scope="row">{moment(parseInt(item.createdAt)).format("DD MMM YYYY, h:mm:ss")}</td>
                        <td>{item.status}</td>
                        <td><Image src={item.image}/></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Transaction;