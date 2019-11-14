import React from "react";
import styled from "styled-components";
import moment from "moment";

const Bubble = styled.div`
  background-color: #007bff;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
`

const ChatCreator = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
`

const ChatTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 10px;
`

const TimeText = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-align: right;
`

class Complaint extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ChatCreator>{`${this.props.data.handledBy ? this.props.data.handledBy.accountName : "Customer"} - ${this.props.data.media}`}</ChatCreator>
        <Bubble>
          {/* <ChatTitle>Judul Complaint</ChatTitle> */}
          <div>{this.props.data.content}</div>
        </Bubble>
        <TimeText>{moment(parseInt(this.props.data.createdAt)).format("DD MMM YYYY, h:mm:ss")}</TimeText>
      </div>
    )
  }
}

export default Complaint;