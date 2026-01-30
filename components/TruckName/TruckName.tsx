"use client";

import { Truck } from "@/lib/api";

type Props = {
  item: Truck;
};

const TruckName = ({ item }: Props) => {
  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.price.toFixed(2)}</p>
      <p>{item.rating}</p>
      <p>{item.location}</p>
      <p>{item.description}</p>
    </>
  );
};

export default TruckName;
