import React from "react";
import styled from "styled-components";

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

const Complaint = (props) => {
  return (
    <div>
      <ChatCreator>Customer Twitter</ChatCreator>
      <Bubble>
        {/* <ChatTitle>Judul Complaint</ChatTitle> */}
        <div>Lorem ipsum huyu tetapi jmemang barangnya udah rusak nih soalnya gak bisa bisa diidupin karena baterainya abis tapi abis baterainya dipasang masih gak bisa ternyata memang baterainya beda ukuran doang tapi gak bisa juga gimana sih</div>
      </Bubble>
      <TimeText>13 November 2019 18:45</TimeText>
    </div>
  )
}

export default Complaint;