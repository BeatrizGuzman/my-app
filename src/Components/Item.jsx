import { Link } from 'react-router-dom';

function Item({ item }) {
  let { id, title, image } = item;

  return (
    <div>
      <div style={{ width: "18.8rem", marginBottom: "5rem", border: "1px solid grey", }}>
        <img src={image} alt="img" style={{ width: "300px", height: "357px" }} />
        <div style={{ marginBottom: "1rem", textAlign: "center" }}>
          <h5 style={{ fontSize: "1rem", marginBottom: "1rem" }}>{title}</h5>
          <Link className="botones" style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }} to={`/item/${id}`}>VER</Link>
        </div>
      </div>
    </div>
  );
}

export default Item;