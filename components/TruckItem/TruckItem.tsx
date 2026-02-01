"use client";

import { Truck } from "@/lib/api";
import Link from "next/link";
import Characteristic from "../Characteristic/Characteristic";
import TruckName from "../TruckName/TruckName";
import Image from "next/image";
import css from "./TruckItem.module.css";

type Props = {
  item: Truck;
};

const TruckItem = ({ item }: Props) => {
  return (
    <li className={css.truck_item}>
      <Image
        src={item.gallery[0].thumb}
        alt={item.name}
        width={292}
        height={320}
      />
      <div>
        <TruckName item={item} />
        <Characteristic item={item} />

        <Link className={css.buttom} href={`/catalog/${item.id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default TruckItem;
