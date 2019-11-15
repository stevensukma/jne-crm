import React from "react";
import styled from "styled-components";
import moment from "moment";

const Bubble = styled.div`
  background-color: #007bff;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
`

const AnotherBubble = styled.div`
  background-color: #ddd;
  padding: 10px 20px;
  color: #000;
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

  generateDataContent = (score) => {
    if (score < 0.4) {
      return "Negative"
    } else if (score < 0.6) {
      return "Neutral"
    } else {
      return "Positive"
    }
  }

  render() {
    console.log(this.props.data.handledBy)
    return (
      <div>
        <ChatCreator>{`${this.props.data.handledBy ? "Arief Rahardjo" : "Customer"} via ${this.props.data.media}`}</ChatCreator>
        {
          this.props.data.handledBy ? (
            <AnotherBubble>
              {/* <ChatTitle>Judul Complaint</ChatTitle> */}
              <div>{this.props.data.content}</div>
            </AnotherBubble>
           ) : (
            <Bubble>
              {/* <ChatTitle>Judul Complaint</ChatTitle> */}
              <div>{this.props.data.content}</div>
            </Bubble>
          )
        }
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <TimeText>{this.props.data.sentiment ? `${this.generateDataContent(this.props.data.sentiment)}, score: ${this.props.data.sentiment.toFixed(3)}` : ''}</TimeText>
          <TimeText>{moment(parseInt(this.props.data.createdAt)).format("DD MMM YYYY, h:mm:ss")}</TimeText>
        </div>
      </div>
    )
  }
}

export default Complaint;