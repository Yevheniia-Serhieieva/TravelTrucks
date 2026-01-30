import { Truck } from "@/lib/api";

type Props = {
  item: Truck;
};

const VehicleDetails = ({ item }: Props) => {
  return (
    <div>
      <h3>Vehicle details</h3>

      <ul>
        <li>
          <p>Form {item.form}</p>
        </li>
        <li>
          <p>Length {item.length}</p>
        </li>
        <li>
          <p>Width {item.width}</p>
        </li>
        <li>
          <p>Height {item.height}</p>
        </li>
        <li>
          <p>Tank {item.tank}</p>
        </li>
        <li>
          <p>Consumption {item.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
