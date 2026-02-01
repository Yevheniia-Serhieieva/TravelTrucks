import { Review } from "@/lib/api";
import css from "./Reviews.module.css";
import RatingStars from "../RatingStars/RatingStars";

type Props = {
  reviews: Review[];
};

const Reviews = ({ reviews }: Props) => {
  return (
    <div>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li className={css.item} key={review.reviewer_name}>
            <div className={css.wrap}>
              <span className={css.span}>
                {review.reviewer_name.slice(0, 1)}
              </span>
              <div className={css.name_wrap}>
                <p className={css.name}>{review.reviewer_name}</p>
                <RatingStars rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.text}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
