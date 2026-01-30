import TruckList from "@/components/TruckList/TruckList";
import { getCatalog } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const TrucksByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const form = slug[0] === "all" ? undefined : slug[0];
  const response = await getCatalog({ form, limit: 4 });

  return (
    <div>
      {response?.items?.length > 0 && <TruckList trucks={response.items} />}
    </div>
  );
};

export default TrucksByCategory;
