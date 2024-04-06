import ItemLeft from "../listItem/item-left";

const ListLeft = ({ data, moveItemToRight }) => {

    return (
        <>
            {data.map((item) => (
                <ItemLeft
                    key={item.id}
                    id={item.id}
                    content={item.content} 
                    moveItemToRight={moveItemToRight}
                />
            ))}
        </>
    );
};

export default ListLeft;