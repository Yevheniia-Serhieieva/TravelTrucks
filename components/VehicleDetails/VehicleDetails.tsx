import { Truck } from "@/lib/api";
import css from "./VehicleDetails.module.css";

type Props = {
  item: Truck;
};

const VehicleDetails = ({ item }: Props) => {
  return (
    <div className={css.vehicle}>
      <h3 className={css.title}>Vehicle details</h3>

      <div className={css.stroke}>
        <svg width="360" height="1">
          <use href="/icons.svg#icon-divider"></use>
        </svg>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>Form</p>
          <p className={css.text}>{item.form}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Length</p>
          <p className={css.text}>{item.length}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Width</p>
          <p className={css.text}>{item.width}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Height</p>
          <p className={css.text}>{item.height}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tank</p>
          <p className={css.text}>{item.tank}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Consumption</p>
          <p className={css.text}>{item.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
