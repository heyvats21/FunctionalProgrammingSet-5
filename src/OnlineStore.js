import React from "react";

const prodcuts = [
  { id: 1, name: "Soap", price: 20, category: "Daily Care" },
  { id: 2, name: "Trimmer", price: 2000, category: "Accessories" },
  { id: 3, name: "Cream", price: 100, category: "Daily Care" },
  { id: 4, name: "Hair Dryer", price: 1500, category: "Accessories" },
  { id: 5, name: "Oil", price: 50, category: "Daily Care" }
];

export default function OnlineStore() {
  return (
    <>
      <h2>Online Store Products</h2>

      <ul>
        {prodcuts.map((prodElem) => (
          <li>
            Name:{prodElem.name}
            Price:{prodElem.price}
            Category:{prodElem.category}
          </li>
        ))}
      </ul>
    </>
  );
}

// id, name, price, and category
