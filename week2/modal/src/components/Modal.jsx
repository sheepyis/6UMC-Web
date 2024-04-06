import React from 'react'
import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
    position: absolute;
    width: 40%;
    padding: 2vw;
    background-color: white;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Title = styled.p`
    font-size: 2vw;
    font-weight: 700;
`

const ModalP = styled.p`
    font-size: 1.5vw;
`

const CloseButton = styled.button`
    margin-top: 2vw;
    align-self: flex-end;
    cursor: pointer;
    font-size: 1.5vw;
`

const Modal = ({close}) => {
    return (
        <ModalContainer>
            <ModalContent>
                <Title>안녕하세요</Title>
                <ModalP>모달 내용은 어쩌고 저쩌고.</ModalP>
                <CloseButton onClick={close}>닫기</CloseButton>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;