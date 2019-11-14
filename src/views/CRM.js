import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const dummyData = [
  {
    firstName: "Joseph",
    lastName: "Salimin",
    country: "Indonesia",
    city: "Jakarta",
    phone: "081212127878"
  }, {
    firstName: "Joseph",
    lastName: "Salimin",
    country: "Indonesia",
    city: "Jakarta",
    phone: "081212127878"
  }
]

const CRM = () => {
  const renderHeader = () => {
    return (
      <thead className="bg-light">
        <tr>
          <th scope="col" className="border-0">
            #
          </th>
          <th scope="col" className="border-0">
            First Name
          </th>
          <th scope="col" className="border-0">
            Last Name
          </th>
          <th scope="col" className="border-0">
            Country
          </th>
          <th scope="col" className="border-0">
            City
          </th>
          <th scope="col" className="border-0">
            Phone
          </th>
        </tr>
      </thead>
    )
  }

  const renderRow = (item, idx) => {
    return (
      <tr>
        <td>{idx}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.country}</td>
        <td>{item.city}</td>
        <td>{item.phone}</td>
      </tr>
    )
  }

  const renderBody = (data) => {
    return (
      <tbody>
        {
          data.map((item, idx) => {
            return (
              renderRow(item, idx + 1)
            )
          })
        }
      </tbody>
    )
  }

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
            <CardHeader className="border-bottom">
              <h6 className="m-0">Active Users</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                {renderHeader()}
                {renderBody(dummyData)}
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CRM;
