import { getCatalog } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Trucks from "./Trucks.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const TrucksByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const form = slug[0] === "all" ? undefined : slug[0];
  const queryClient = new QueryClient();

  const filters = form ? { form } : undefined;

  await queryClient.prefetchQuery({
    queryKey: ["trucks", { page: 1, ...filters }],
    queryFn: () => getCatalog({ page: 1, limit: 4, ...filters }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Trucks filters={filters} />
    </HydrationBoundary>
  );
};

export default TrucksByCategory;
