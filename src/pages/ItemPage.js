import React, { useContext, useState, useEffect } from "react";
import ItemDetails from "./../components/ItemDetails";
import itemContext from "./../context/itemContext";
import { useHistory } from "react-router-dom";

function ItemPage(props) {
  const history = useHistory();
  const [inputBox, setInputBox] = useState(false);
  const [items, setItems] = useContext(itemContext);
  const selectedItem = items[props.match.params.id];

  function setChecked(avail) {
    const copyItems = { ...items };
    copyItems[props.match.params.id].available = avail;
    setItems(copyItems);
  }

  function goBackHandle() {
    history.goBack();
  }

  const editDoubleClick = () => {
    setInputBox(!inputBox);
  };

  function onKeyPressPrice(e) {
     if (e.key === "Enter") {
      setInputBox(!inputBox);
      const copyItems = { ...items };
      copyItems[props.match.params.id].price = e.target.value;
      setItems(copyItems);
    }
  }

  useEffect(()=>{
      console.log(items)
  },[items])

  return (
    <ItemDetails
      selectedItem={selectedItem}
      setChecked={setChecked}
      goBackHandle={goBackHandle}
      editDoubleClick={editDoubleClick}
      onKeyPressPrice={onKeyPressPrice}
      inputBox={inputBox}
    ></ItemDetails>
  );
}

export default ItemPage;
