import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import styled from "styled-components";
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import moment from "moment";
import "react-sweet-progress/lib/style.css";

const Image = styled.img`
  height: 200px;
`

class Insurance extends React.Component{
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
    console.log("asdifjlaskfj;jkl;")
    console.log(this.props.data)
    return (
      <div style={{ marginBottom: "50px"}}>
        <div style={{ color: "#999"}}>Nomor Resi: {this.props.data && this.props.data.awb}</div>
        <Row style={{ marginTop: "10px", marginBottom: "20px"}}>
          <Col>
              <div style={{ color: "#999"}}>Pengirim:</div>
              <div>{this.props.data && this.props.data.issuer.accountName}</div>
              <div>{this.props.data && this.props.data.receipt.origin}</div>
          </Col>
          <Col>
          <div>
            <div style={{ color: "#999"}} >Penerima:</div>
            <div>{this.props.data && this.props.data.receipt.receiver}</div>
              <div>{this.props.data && this.props.data.receipt.destination}</div>
          </div>
          </Col>
        </Row>
        <Row style={{marginBottom: "20px"}}>
          <Col>
            <div>Klaim diajukan</div>
            <div>{this.props.data && new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.props.data.amountSubmission)}</div>
          </Col>
          <Col>
            <div>Estimasi Kerugian</div>
            <div>{this.props.data && new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.props.data.amountCalculation)}</div>
          </Col>
          <Col>
            <div>Status Pengajuan</div>
            <div>{this.props.data && this.props.data.status}</div>
          </Col>
        </Row>
        <Button onClick={this.toggle} color="secondary" size="lg" block>Show More</Button>
        <Modal
          isOpen={this.state.modal}
        >
          <ModalHeader toggle={this.toggle}>Detail</ModalHeader>
          <ModalBody>
              {
                this.props.data && (
                  <div>
                    <Image src={this.props.data.billImg}/>
                    <Image src={this.props.data.invoiceImg}/>
                    <Image src={this.props.data.receiptImg}/>
                  </div>
                )
              }
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Insurance;