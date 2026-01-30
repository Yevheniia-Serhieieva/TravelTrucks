import { getSingleTruck } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TruckDetailsClient from "./TruckDetails.client";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const truck = await getSingleTruck(id);
  return {
    title: `Truck: ${truck.name}`,
    description: truck.description.slice(0, 30),
  };
}

const TruckDetails = async ({ params }: Props) => {
  const { id } = await params;
  const truck = await getSingleTruck(id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["truck", id],
    queryFn: () => getSingleTruck(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TruckDetailsClient truck={truck} />;
    </HydrationBoundary>
  );
};

export default TruckDetails;
