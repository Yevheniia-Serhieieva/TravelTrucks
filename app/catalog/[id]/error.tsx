"use client";

import css from "./error.module.css";

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  return (
    <>
      <p className={css.text}>
        Could not fetch the list of trucks. {error.message}
      </p>
    </>
  );
};

export default Error;
