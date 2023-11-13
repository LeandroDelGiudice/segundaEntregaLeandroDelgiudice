import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { itemDetail } from "./ItemDetail";
import { Container } from "react-bootstrap";
import { parts } from "../assets/data/parts";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(parts);
      }, 2000);
    });

    mypromise.then((response) => {
      const findById = response.find((item) => item.id === Number(id));
      setItem(findById);
    });
  }, [id]);

  return (
    <Container className="mt-4">
      {item ? <itemDetail item={item} /> : <>loading</>}
    </Container>
  );
};
