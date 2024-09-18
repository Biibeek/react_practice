function List(props) {

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => a.calorie - b.calorie);
    // fruits.sort((a, b) => b.calorie - a.calorie);

    // const lowcalfruits = fruits.filter(fruit => fruit.calorie < 30)
    const category = props.category
    const itemfruits = props.items
    const listoffruit = itemfruits.map(itemfruit => <li
        key={itemfruit.id}>{itemfruit.name}:{itemfruit.calorie}</li>)
    return (<>
        {/* <ul>{listoffruit}</ul> */}
        <h1 className="list-items">{category}</h1><ol className="lists">{listoffruit}</ol>
    </>)
}
export default List