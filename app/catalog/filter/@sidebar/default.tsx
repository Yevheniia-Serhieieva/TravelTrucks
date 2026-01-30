"use client";

import CharacteristicFilter from "@/components/CharacteristicFilter/CharacteristicFilter";
import { useCatalogStore } from "@/stores/useCatalogStore";
import { useState } from "react";

const TrucksSidebar = () => {
  const [location, setLocation] = useState("");
  const setFilter = useCatalogStore((s) => s.setFilter);
  const fetchInitial = useCatalogStore((s) => s.fetchInitial);

  const onSearch = () => {
    setFilter({ location });
    fetchInitial();
  };

  return (
    <div>
      <label>
        Location
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          //   <svg>
          //     <use />
          //   </svg>
        />
      </label>

      <p>Vehicle equipment</p>
      <CharacteristicFilter />

      <p>Vehicle type</p>
      <ul>
        <li>
          <svg>
            <use />
          </svg>
          <p>Van</p>
        </li>
        <li>
          <svg>
            <use />
          </svg>
          <p>Fully Integrated</p>
        </li>
        <li>
          <svg>
            <use />
          </svg>
          <p>Alcove</p>
        </li>
      </ul>
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default TrucksSidebar;
