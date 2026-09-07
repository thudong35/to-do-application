import "./ListItem.css";

function ListItem({ name, id, onRemoveTask }) {
  
  return (
    <li className="list-item">
      <button onClick={() => onRemoveTask(id)}>{name}</button>
    </li>
  );
}

export default ListItem;
