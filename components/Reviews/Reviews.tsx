import { Review } from "@/lib/api";

type Props = {
  reviews: Review[];
};

const Reviews = ({ reviews }: Props) => {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.reviewer_name}>
            <svg>
              <use />
            </svg>
            <p>{review.reviewer_name}</p>
            <p>
              <svg>
                <use />
              </svg>
              {review.reviewer_rating}
            </p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
