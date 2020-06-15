import React from "react";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";

function ItemDetails(props) {
  return (
    <div>
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Header>{props.selectedItem.name}</Card.Header>
        <Card.Body>
          <Card.Title>Price</Card.Title>
          <Card.Text>
            {props.inputBox === false ? (
              <div onDoubleClick={props.editDoubleClick}>
                {props.selectedItem.price}
              </div>
            ) : (
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  defaultValue={props.selectedItem.price}
                  onKeyPress={props.onKeyPressPrice}
                />
              </InputGroup>
            )}
          </Card.Text>
          <Card.Title>
            {props.selectedItem.available ? "Available" : "Not available"}
          </Card.Title>
          <Card.Text>
            <input
              type="checkbox"
              checked={props.selectedItem.available}
              onChange={() => props.setChecked(!props.selectedItem.available)}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={props.goBackHandle}>
        Go Back
      </Button>
    </div>
  );
}

export default ItemDetails;
