import React, { useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from "styled-components";
import axios from "axios";

import PageTitle from "../components/common/PageTitle";
import Complaint from "../components/crm/Complaint";
import Transaction from "../components/crm/Transaction";
import Insurance from "../components/crm/Insurance";
import UserDetails from "../components/user-profile-lite/UserDetails";
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';

const dummyData = {
  id: 1,
  firstName: "Joseph",
  lastName: "Salimin",
  country: "Indonesia",
  city: "Jakarta",
  phone: "081212127878"
}

const CardContent = styled.div`
  padding: 16px;
`

const ComplaintWrapper = styled.div`
  height: 50vh;
  overflow: scroll;
  padding: 10px;
  padding-right: 40px;
  border-width: 3px;
`

const ChatInput = styled.input`
  width: 90%;
  margin: 10px;
  padding: 6px 10px;
  border-radius: 10px;
  outline-width: 0;
`

class CRMDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      data: {},
    }
  }

  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = async() => {
    try {
      const response = await axios.get("http://23.97.61.221:5000/customer");
      if (response.data) {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i]["id"] == this.props.match.params.customerId) {
            this.setState({ data: response.data[i] });
            break;
          }
        }
      }
    } catch(err) {
      console.log(err)
    }
  }

  toggle = ()  => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  renderSummary = (data) => {
    return (
      <div>
        <Row style={{paddingBottom: "6px"}}>
          <Col style={{fontWeight: "700", color: "#bbb"}}>Nama Lengkap</Col>
          <Col>{data.accountName}</Col>
        </Row>
        <Row style={{paddingBottom: "6px"}}>
          <Col style={{fontWeight: "700", color: "#bbb"}}>Alamat</Col>
          <Col>{data.address}</Col>
        </Row>
        <Row style={{paddingBottom: "6px"}}>
          <Col style={{fontWeight: "700", color: "#bbb"}}>Customer Type</Col>
          <Col>{data.customerType}</Col>
        </Row>
        <Row style={{paddingBottom: "6px"}}>
          <Col style={{fontWeight: "700", color: "#bbb"}}>Telepon</Col>
          <Col>{data.phoneNumber}</Col>
        </Row>
        <Row style={{paddingBottom: "6px"}}>
          <Col style={{fontWeight: "700", color: "#bbb"}}>Email</Col>
          <Col>{data.email}</Col>
        </Row>
        <Row style={{paddingBottom: "6px"}}>
          <Col style={{fontWeight: "700", color: "#bbb"}}>Twitter</Col>
          <Col>{data.twitter}</Col>
        </Row>
      </div>
    )
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Customer Relationship Management"
            subtitle="JNE 360"
            className="text-sm-left"
          />
        </Row>
        <Row>
          <Col md={4}>
            <Card small className="mb-4">
            {/* <UserDetails /> */}
              <CardHeader className="border-bottom">
                <h6 className="m-0">Customer Summary</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <CardContent>
                  { this.renderSummary(this.state.data) }
                </CardContent>
              </CardBody>
            </Card>
          </Col>
          <Col md={8}>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Detail</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <CardContent>
                  <Tabs act>
                    <TabList>
                      <Tab>Complaints</Tab>
                      <Tab>Transactions</Tab>
                      <Tab>Insurance Claims</Tab>
                    </TabList>
                    <TabPanel>
                      <ComplaintWrapper>
                        <Complaint/>
                        <Complaint/>
                        <Complaint/>
                        <Complaint/>
                        <Complaint/>
                        <Complaint/>
                      </ComplaintWrapper>
                      <div>
                        <ChatInput type={"text"}/>
                        <i style={{ fontSize: "2rem"}}className="material-icons">send</i>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <Transaction onShowMore={this.toggle}/>
                      <Transaction onShowMore={this.toggle}/>
                    </TabPanel>
                    <TabPanel>
                      <Insurance onShowMore={this.toggle}/>
                      <Insurance onShowMore={this.toggle}/>
                    </TabPanel>
                  </Tabs>
                </CardContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
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
                <tr>
                  <th scope="row">30-08-2019 20:13</th>
                  <td>SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [JAKARTA]</td>
                  <td><img src={"https://via.placeholder.com/150"}/></td>
                </tr>
                <tr>
                  <th scope="row">30-08-2019 23:57</th>
                  <td>SHIPMENT PICKED UP BY JNE COURIER [JAKARTA]</td>
                  <td><img src={"https://via.placeholder.com/150"}/></td>
                </tr>
                <tr>
                  <th scope="row">31-08-2019 05:38</th>
                  <td>RECEIVED AT ORIGIN GATEWAY [JAKARTA]</td>
                  <td><img src={"https://via.placeholder.com/150"}/></td>
                </tr>
              </tbody>
            </Table>
          </ModalBody>
        </Modal>
      </Container>
    )
  }
}

export default CRMDetail;