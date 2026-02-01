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

  if (!truck) {
    return {
      title: "Truck not found",
      description: "The truck you are looking for does not exist.",
    };
  }

  return {
    title: `Truck: ${truck.name}`,
    description: truck.description.slice(0, 30),
    openGraph: {
      title: `Truck: ${truck.name}`,
      description: truck.description.slice(0, 30),
      url: `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`,
    },
  };
}

const TruckDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["truck", id],
    queryFn: () => getSingleTruck(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TruckDetailsClient />
    </HydrationBoundary>
  );
};

export default TruckDetails;
