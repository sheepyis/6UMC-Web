import styled from "styled-components";

const RightList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    margin-bottom: 1vw;
`

const TodoTitle = styled.p`
    font-size: 1vw;
    font-weight: 700;
    color: #000000;
`

const TodoTop = styled.div`
    width: 15vw;
    height: 1.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DeleteBtn = styled.button`
    height: 100%;
    background-color: #B5D2ED;
    color: #000000;
    font-size: 0.8vw;
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const TodoBottom = styled.div`
    width: 100%;
    height: 0.25vw;
    background-color: #B5D2ED;
    border: none;
`

const ItemRight = ({id, content, removeItem}) => {
    const handleDelete = () => {
        removeItem(id);
    }
    
    return (
        <RightList key={id}>
            <TodoTop>
                <TodoTitle>{content}</TodoTitle>
                <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
            </TodoTop>
            <TodoBottom/>
        </RightList>
    );
};

export default ItemRight;