"use client";

import { Truck } from "@/lib/api";
import css from "./TruckName.module.css";

type Props = {
  item: Truck;
};

const TruckName = ({ item }: Props) => {
  return (
    <>
      <div className={css.name_block}>
        <div className={css.title}>
          <h2 className={css.name}>{item.name}</h2>
          <p className={css.name}>€{item.price.toFixed(2)}</p>
        </div>

        <div className={css.wrap}>
          <div className={css.rating}>
            <svg width="16" height="16">
              <use href="/icons.svg#icon-gold-rating"></use>
            </svg>
            <p className={css.text}>
              {item.rating}({item.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location_wrap}>
            <svg width="16" height="16">
              <use href="/icons.svg#icon-map"></use>
            </svg>
            <p className={css.text}>{item.location}</p>
          </div>
        </div>
        <p className={css.text}>{item.description.slice(0, 60)}...</p>
      </div>
    </>
  );
};

export default TruckName;
