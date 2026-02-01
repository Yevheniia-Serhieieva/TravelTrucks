"use client";

import { useCatalogStore } from "@/stores/useCatalogStore";
import { useState } from "react";
import css from "./Sidebar.module.css";

const TrucksSidebar = () => {
  const setFilter = useCatalogStore((s) => s.setFilter);
  const fetchInitial = useCatalogStore((s) => s.fetchInitial);

  const [location, setLocation] = useState("");
  const [form, setForm] = useState<string | undefined>();
  const [equipment, setEquipment] = useState({
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const toggleEquipment = (key: keyof typeof equipment) => {
    setEquipment((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const onSearch = () => {
    setFilter({
      location: location || undefined,
      form,
      ...equipment,
    });

    fetchInitial();
  };

  return (
    <div>
      <div className={css.location}>
        <label className={css.location_label}>
          Location
          <input
            className={css.location_input}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Kyiv, Ukraine"
          />
          <svg className={css.location_svg} width="20" height="20">
            <use href="/icons.svg#icon-map"></use>
          </svg>
        </label>
      </div>

      <p className={css.filters}>Filters</p>

      <div className={css.equipment}>
        <h2 className={css.filter_title}>Vehicle equipment</h2>

        <div className={css.stroke}>
          <svg width="360" height="1">
            <use href="/icons.svg#icon-divider"></use>
          </svg>
        </div>

        {/* <ul className={css.type_list}>
          <li className={css.type_item}>
            <svg width="32" height="32">
              <use href="/icons.svg#icon-wind"></use>
            </svg>
            <p>AC</p>
          </li>
          <li className={css.type_item}>
            <svg width="32" height="32">
              <use href="/icons.svg#icon-diagram"></use>
            </svg>
            <p>Automatic</p>
          </li>
          <li className={css.type_item}>
            <svg width="32" height="32">
              <use href="/icons.svg#icon-cup-hot"></use>
            </svg>
            <p>Kitchen</p>
          </li>
          <li className={css.type_item}>
            <svg width="32" height="32">
              <use href="/icons.svg#icon-tv"></use>
            </svg>
            <p>TV</p>
          </li>
          <li className={css.type_item}>
            <svg width="32" height="32">
              <use href="/icons.svg#icon-shower"></use>
            </svg>
            <p>Bathroom</p>
          </li>
        </ul> */}

        <ul className={css.type_list}>
          {[
            { key: "AC", icon: "icon-wind", label: "AC" },
            { key: "kitchen", icon: "icon-cup-hot", label: "Kitchen" },
            { key: "TV", icon: "icon-tv", label: "TV" },
            { key: "bathroom", icon: "icon-shower", label: "Bathroom" },
          ].map(({ key, icon, label }) => (
            <li
              key={key}
              className={css.type_item}
              onClick={() => toggleEquipment(key as keyof typeof equipment)}
              style={{
                borderColor: equipment[key as keyof typeof equipment]
                  ? "var(--button)"
                  : "var(--gray-light)",
              }}
            >
              <input
                type="checkbox"
                checked={equipment[key as keyof typeof equipment]}
                readOnly
                hidden
              />
              <svg width="32" height="32">
                <use href={`/icons.svg#${icon}`} />
              </svg>
              <p>{label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.type}>
        <h2 className={css.filter_title}>Vehicle type</h2>

        <div className={css.stroke}>
          <svg width="360" height="1">
            <use href="/icons.svg#icon-divider"></use>
          </svg>
        </div>

        {/* <ul className={css.type_list}>
          <li className={css.type_item}>
            <div className={css.svg}>
              <svg width="32" height="32">
                <use href="/icons.svg#icon-bi_grid-1x2"></use>
              </svg>
            </div>
            <p className={css.item_text}>Van</p>
          </li>
          <li className={css.type_item}>
            <div className={css.svg}>
              <svg width="32" height="32">
                <use href="/icons.svg#icon-bi_grid"></use>
              </svg>
            </div>
            <p className={css.item_text}>Fully Integrated</p>
          </li>
          <li className={css.type_item}>
            <div className={css.svg}>
              <svg width="32" height="32">
                <use href="/icons.svg#icon-bi_grid-3x3-gap"></use>
              </svg>
            </div>
            <p className={css.item_text}>Alcove</p>
          </li>
        </ul> */}

        <ul className={css.type_list}>
          {[
            { value: "van", icon: "icon-bi_grid-1x2", label: "Van" },
            {
              value: "fully",
              icon: "icon-bi_grid",
              label: "Fully Integrated",
            },
            {
              value: "alcove",
              icon: "icon-bi_grid-3x3-gap",
              label: "Alcove",
            },
          ].map(({ value, icon, label }) => (
            <li
              key={value}
              className={css.type_item}
              onClick={() => setForm(value)}
              style={{
                borderColor:
                  form === value ? "var(--button)" : "var(--gray-light)",
              }}
            >
              <input
                type="radio"
                name="form"
                checked={form === value}
                readOnly
                hidden
              />
              <svg width="32" height="32">
                <use href={`/icons.svg#${icon}`} />
              </svg>
              <p className={css.item_text}>{label}</p>
            </li>
          ))}
        </ul>
      </div>

      <button className={css.button} type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default TrucksSidebar;
