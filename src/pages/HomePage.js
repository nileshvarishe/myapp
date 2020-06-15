import React, { useContext } from "react";
import ItemList from "./../components/ItemList";
import itemContext from "./../context/itemContext";

export default function HomePage() {
  let [items] = useContext(itemContext);

  let filteredItems = [];
  if (!items.isArray) {
    items = Object.entries(items);
    items.map(function (value) {
      return (items[value[0]] = value[1]);
    });
    filteredItems = items.filter((value) => {
      return value.itemId !== undefined;
    });
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>Product List</h1>
      {filteredItems.map((v, i) => {
        return (
          <ItemList
            itemId={v.itemId}
            itemName={v.name}
            key={v.itemId}
          ></ItemList>
        );
      })}
    </div>
  );
}
