"use client";

import TruckList from "@/components/TruckList/TruckList";
import { useCatalogStore } from "@/stores/useCatalogStore";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Catalog of Trucks",
  description: "Campers of your dreams in all taste",
};

const CatalogPage = () => {
  const { items, fetchInitial, loadMore, isLoading } = useCatalogStore();

  useEffect(() => {
    fetchInitial();
  }, [fetchInitial]);

  return (
    <section>
      <TruckList trucks={items} />

      {isLoading && <p>Loading...</p>}

      <button onClick={loadMore}>Load More</button>
    </section>
  );
};

export default CatalogPage;
