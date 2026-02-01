"use client";

import TruckList from "@/components/TruckList/TruckList";
import { useCatalogStore } from "@/stores/useCatalogStore";
import { useEffect } from "react";

const CatalogPage = () => {
  const { items, fetchInitial, loadMore, isLoading } = useCatalogStore();

  useEffect(() => {
    fetchInitial();
  }, [fetchInitial]);

  return (
    <div>
      <TruckList trucks={items} />
      {isLoading && <p>Loading...</p>}

      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default CatalogPage;
