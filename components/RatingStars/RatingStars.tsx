import css from "./RatingStars.module.css";

type Props = {
  rating: number;
};

export default function RatingStars({ rating }: Props) {
  return (
    <ul className={css.list}>
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = index < rating;

        return (
          <li key={index}>
            {isActive ? (
              <svg width="16" height="16">
                <use href="/icons.svg#icon-gold-rating"></use>
              </svg>
            ) : (
              <svg width="16" height="16">
                <use href="/icons.svg#icon-rating"></use>
              </svg>
            )}
          </li>
        );
      })}
    </ul>
  );
}
