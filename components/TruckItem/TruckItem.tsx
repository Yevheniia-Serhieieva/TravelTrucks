"use client";

import { Truck } from "@/lib/api";
import Link from "next/link";
import Characteristic from "../Characteristic/Characteristic";
import TruckName from "../TruckName/TruckName";
import Image from "next/image";

type Props = {
  item: Truck;
};

const TruckItem = ({ item }: Props) => {
  return (
    <li>
      <Image
        src={item.gallery[0].thumb}
        alt={item.name}
        width={292}
        height={320}
      />

      <TruckName item={item} />
      <Characteristic item={item} />

      <Link href={`/catalog/${item.id}`}>Show more</Link>
    </li>
  );
};

export default TruckItem;
