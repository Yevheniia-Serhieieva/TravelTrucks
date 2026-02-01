import axios from "axios";

export type Gallery = {
  thumb: string;
  original: string;
};

export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Truck = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Gallery[];
  reviews: Review[];
};

export type TruckList = {
  items: Truck[];
  total: number;
};

export type CategoryFilter = {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
};

const nextServer = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  withCredentials: true,
});

export const getCatalog = async (
  params: CategoryFilter,
): Promise<TruckList> => {
  const res = await nextServer.get<TruckList>("/campers", {
    params,
    headers: {
      accept: "application/json",
    },
  });
  return res.data;
};

export const getSingleTruck = async (id: string): Promise<Truck> => {
  const res = await nextServer.get<Truck>(`/campers/${id}`, {
    headers: {
      accept: "application/json",
    },
  });
  return res.data;
};
