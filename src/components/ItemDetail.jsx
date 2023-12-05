/* import { useContext } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";
export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);
  const Add = (quantity) => {
    onAdd(item, quantity);
  };
  return (
    <>
      <h1>{item.title}</h1>
      <h2>precio: ${item.price}</h2>
      <h3>Detalle: {item.description}</h3>
      <img src={item.pictureUrl} alt={item.title} />
      <h2>Stock : {item.stock}</h2>
      <ItemCounter onAdd={Add} stock={item.stock}  initial={1}/>
    </>
  );
}; */
import { useContext } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    onAdd(item, quantity);
  };

  return (
    <div className="container mt-4">
      <h1 className="display-4">{item.title}</h1>
      <h2 className="text-success">Precio: ${item.price}</h2>
      <p className="lead">{item.description}</p>
      <img className="img-fluid mb-3" src={item.pictureUrl} alt={item.title} />
      <h2>Stock: {item.stock}</h2>
      <ItemCounter onAdd={handleAddToCart} stock={item.stock} initial={1} />
    </div>
  );
};
