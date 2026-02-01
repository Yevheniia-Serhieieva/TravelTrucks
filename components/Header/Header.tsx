import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        <svg width="136" height="16">
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </Link>

      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={css.item}>
            <Link href="/catalog/filter/all">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
