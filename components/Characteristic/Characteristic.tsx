import { Truck } from "@/lib/api";

type Props = {
  item: Truck;
};

const Characteristic = ({ item }: Props) => {
  return (
    <ul>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.transmission}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.engine}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.AC}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.kitchen}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.bathroom}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.TV}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.radio}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.refrigerator}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.microwave}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.gas}</p>
      </li>
      <li>
        <svg>
          <use />
        </svg>
        <p>{item.water}</p>
      </li>
    </ul>
  );
};

export default Characteristic;
