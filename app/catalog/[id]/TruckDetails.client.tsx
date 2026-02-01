"use client";

import Reviews from "@/components/Reviews/Reviews";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import { getSingleTruck } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import css from "./TruckDetails.page.module.css";
import CharacteristicDetails from "@/components/CharacteristicDetails/CharacteristicDetails";
import BookingForm from "@/components/BookingForm/BookingForm";

const TruckDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features",
  );

  const {
    data: truck,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["truck", id],
    queryFn: () => getSingleTruck(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError || !truck) return <p>Soomething went wrong.</p>;

  return (
    <div className={css.details}>
      <div className={css.name_block}>
        <h2 className={css.name}>{truck.name}</h2>

        <div className={css.wrap}>
          <div className={css.rating}>
            <svg width="16" height="16">
              <use href="/icons.svg#icon-gold-rating"></use>
            </svg>
            <p className={css.text_rev}>
              {truck.rating}({truck.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location_wrap}>
            <svg width="16" height="16">
              <use href="/icons.svg#icon-map"></use>
            </svg>
            <p className={css.text}>{truck.location}</p>
          </div>
        </div>

        <p className={css.name}>€{truck.price.toFixed(2)}</p>
      </div>

      <div className={css.wrap_img}>
        {truck.gallery.map((img) => (
          <Image
            className={css.img}
            key={img.thumb}
            src={img.thumb}
            alt={truck.name}
            width={292}
            height={312}
          />
        ))}
      </div>

      <p className={css.text_descr}>{truck.description}</p>

      <div className={css.tab}>
        <button
          className={css.tab_button}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={css.tab_button}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.stroke}>
        <svg width="1312" height="1">
          <use href="/icons.svg#icon-divider"></use>
        </svg>
      </div>

      <div className={css.active_wrap}>
        {activeTab === "features" && (
          <div className={css.features_wrap}>
            <CharacteristicDetails item={truck} />
            <VehicleDetails item={truck} />
          </div>
        )}

        {activeTab === "reviews" && <Reviews reviews={truck.reviews} />}

        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default TruckDetailsClient;
