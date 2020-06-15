import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function ItemList(props) {
  return (
    <div key={props.itemId}>
      <ListGroup>
        <ListGroup.Item>
          <Link to={"item/" + props.itemId}>{props.itemName}</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ItemList;
