import Item from './Item';

function ItemLIst({ items }) {
    return (<>
        {items.map(i => <Item key={i.id} item={i} />)}
    </>);
}

export default ItemLIst