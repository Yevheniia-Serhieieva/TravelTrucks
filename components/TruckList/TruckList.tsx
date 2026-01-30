"use client";

import { Truck } from "@/lib/api";
import TruckItem from "../TruckItem/TruckItem";

type Props = {
  trucks: Truck[];
};

const TruckList = ({ trucks }: Props) => {
  return (
    <ul>
      {trucks.map((truck) => (
        <TruckItem key={truck.id} item={truck} />
      ))}
    </ul>
  );
};

export default TruckList;
