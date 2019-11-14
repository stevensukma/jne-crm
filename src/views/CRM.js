import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import ReactTable from 'react-table';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from "axios";

import PageTitle from "../components/common/PageTitle";
import 'react-table/react-table.css'

const columns = [{
  Header: '#',
  accessor: 'id',
  maxWidth: 50
}, {
  Header: 'Name',
  accessor: 'accountName'
}, {
  Header: 'Customer Type',
  accessor: 'customerType',
}, {
  Header: 'Phone',
  accessor: 'phoneNumber',
}, {
  Header: 'Email',
  accessor: 'email'
}, {
  Header: 'Actions',
  id: 'click-me-button',
  Cell: (d) => {
    return (
      <Link to={`/crm/${d.original.id}`}>
        <Button theme="primary" className="mb-2 mr-1 text-center">
          <i className="material-icons mr-1">search</i>
        </Button>
      </Link>
    )
  }
}]

const TableWrapper = styled.div`
  padding: 20px;
`

class CRM extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  getCustomers = async() => {
    try {
      const response = await axios.get("http://23.97.61.221:5000/customer");
      if (response.data) {
        this.setState({
          data: response.data,
        })
      }
    } catch(err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getCustomers();
  }

  render() {
    console.log(this.state.data)
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Customer Relationship Management"
            subtitle="JNE 360"
            className="text-sm-left"
          />
        </Row>

        {/* Default Light Table */}
          <Row>
            <Col>
              <Card small className="mb-4">
                <TableWrapper>
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Active Users</h6>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <ReactTable
                      className="p-0"
                      data={this.state.data}
                      columns={columns}
                      defaultPageSize={10}
                    />
                  </CardBody>
                </TableWrapper>
              </Card>
            </Col>
          </Row>
        {/* </TableWrapper> */}
      </Container>
    );
  }
};

export default CRM;
