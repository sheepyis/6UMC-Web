import React, {useState} from "react";
import styled from "styled-components";
import Modal from "./components/Modal";

const OpenButton = styled.button`
  cursor: pointer;
`

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function open() {
    console.log("모달이 켜짐");
    setIsModalOpen(true);
  }

  function close() {
    console.log("모달이 꺼짐");
    setIsModalOpen(false);
  }

  return (
    <>
      <h2>안녕하세요!</h2>
      <h4>내용내용내용</h4>
      <OpenButton onClick={open}>버튼 열기</OpenButton>

      {isModalOpen && <Modal close={close} />}
    </>
  )
}

export default App;