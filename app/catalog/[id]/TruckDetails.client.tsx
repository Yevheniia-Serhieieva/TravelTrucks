"use client";

import Characteristic from "@/components/Characteristic/Characteristic";
import Reviews from "@/components/Reviews/Reviews";
import TruckName from "@/components/TruckName/TruckName";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import { Truck } from "@/lib/api";
import { Form } from "formik";
import Image from "next/image";
import { useState } from "react";

type Props = {
  truck: Truck;
};

const TruckDetailsClient = ({ truck }: Props) => {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features",
  );

  return (
    <div>
      <TruckName item={truck} />

      <div>
        {truck.gallery.map((img) => (
          <Image
            key={img.thumb}
            src={img.thumb}
            alt={truck.name}
            width={292}
            height={312}
          />
        ))}
      </div>

      <div>
        <button onClick={() => setActiveTab("features")}>Features</button>
        <button onClick={() => setActiveTab("reviews")}>Reviews</button>
      </div>

      {activeTab === "features" && (
        <>
          <Characteristic item={truck} />
          <VehicleDetails item={truck} />
        </>
      )}

      {activeTab === "reviews" && <Reviews reviews={truck.reviews} />}

      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default TruckDetailsClient;
