"use client";

import Pagination from "@/components/Pagination/Pagination";
import TruckList from "@/components/TruckList/TruckList";
import { CategoryFilter, getCatalog, Truck } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  filters?: CategoryFilter;
};

export default function Trucks({ filters }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["trucks", { page: currentPage, ...filters }],
    queryFn: () => getCatalog({ page: currentPage, limit: 4, ...filters }),
    placeholderData: keepPreviousData,
  });

  const trucks: Truck[] = data?.items || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error to loading trucks...</p>;

  return (
    <div>
      {trucks.length > 0 && <TruckList trucks={trucks} />}

      {trucks.length > 0 && (
        <Pagination currentPage={currentPage} onClick={handlePageChange} />
      )}
    </div>
  );
}
