import { Truck } from "@/lib/api";
import css from "./CharacteristicDetails.module.css";

type Props = {
  item: Truck;
};

const CharacteristicDetails = ({ item }: Props) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-diagram"></use>
        </svg>
        <p>{item.transmission}</p>
      </li>
      <li className={css.item}>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-fuel-pump"></use>
        </svg>
        <p>{item.engine}</p>
      </li>
      {item.kitchen === true && (
        <li className={css.item}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-cup-hot"></use>
          </svg>
          <p>kitchen</p>
        </li>
      )}
      {item.AC === true && (
        <li className={css.item}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-wind"></use>
          </svg>
          <p>AC</p>
        </li>
      )}
      {item.bathroom === true && (
        <li className={css.item}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-shower"></use>
          </svg>
          <p>bathroom</p>
        </li>
      )}
      {item.TV === true && (
        <li className={css.item}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-tv"></use>
          </svg>
          <p>TV</p>
        </li>
      )}
      {item.radio === true && (
        <li className={css.item}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-radio"></use>
          </svg>
          <p>radio</p>
        </li>
      )}
      {item.refrigerator === true && (
        <li className={css.item}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-fridge"></use>
          </svg>
          <p>refrigerator</p>
        </li>
      )}
      {item.microwave === true && (
        <li className={css.item}>
          <svg className={css.svg} width="20" height="20">
            <use href="/icons.svg#icon-microwave"></use>
          </svg>
          <p>microwave</p>
        </li>
      )}
      {item.gas === true && (
        <li className={css.item}>
          <svg className={css.svg} width="20" height="20">
            <use href="/icons.svg#icon-gas"></use>
          </svg>
          <p>gas</p>
        </li>
      )}
      {item.water === true && (
        <li className={css.item}>
          <svg className={css.svg} width="20" height="20">
            <use href="/icons.svg#icon-water"></use>
          </svg>
          <p>water</p>
        </li>
      )}
    </ul>
  );
};

export default CharacteristicDetails;
