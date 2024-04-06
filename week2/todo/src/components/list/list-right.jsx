import ItemRight from "../listItem/item-right";

const ListRight = ({ data, removeItem }) => {
    return (
        <>
            {data.map((item) => (
                <ItemRight
                    key={item.id}
                    id={item.id}
                    content={item.content} 
                    removeItem={removeItem}
                />
            ))}
        </>
    );
};

export default ListRight;