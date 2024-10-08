import { FinalPrice } from "../../components/display/final-price";
import React, { FC } from "react";
import { Bike } from "../../types/product";
import { Box, Text } from "zmp-ui";
import { BikePicker } from "./bike_picker";

export const BikeItem: FC<{ bike: Bike }> = ({ bike }) => {
  return (
    <BikePicker bike={bike}>
      {({ open }) => (
        <div className="space-y-2" onClick={open}>
          <Box className="w-full aspect-square relative">
            <img
              loading="lazy"
              src={bike.image}
              className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
            />
          </Box>
          <Text>{bike.name}</Text>
          
          <Text size="xxSmall" className="text-gray pb-2">Giá: {bike.price.toLocaleString()} VNĐ</Text>
          
        </div>
      )}
    </BikePicker>
  );
};
