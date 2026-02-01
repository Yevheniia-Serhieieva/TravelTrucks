"use client";

import { Truck } from "@/lib/api";
import TruckItem from "../TruckItem/TruckItem";
import css from "./TruckList.module.css";

type Props = {
  trucks: Truck[];
};

const TruckList = ({ trucks }: Props) => {
  if (!Array.isArray(trucks)) {
    return null;
  }

  return (
    <ul className={css.truck_list}>
      {trucks.map((truck) => (
        <TruckItem key={truck.id} item={truck} />
      ))}
    </ul>
  );
};

export default TruckList;
