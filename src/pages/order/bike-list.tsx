import React, { FC, Suspense } from "react";
import { Section } from "../../components/section";
import { useRecoilValue } from "recoil";
import { bikesState } from "../../state";
import { Box } from "zmp-ui";
import { BikeItem } from "../../components/product/bike_item";
import { ProductItemSkeleton } from "../../components/skeletons";

export const BikeListContent: FC = () => {
  const bikes = useRecoilValue(bikesState);
{/* <Section title="Danh sách sản phẩm"></Section> */}
  return (
    <Section title="Danh sách sản phẩm">
      <Box className="grid grid-cols-2 gap-4">
        {bikes.map((bike) => (
          <BikeItem key={bike.id} bike={bike} />
        ))}
      </Box>
    </Section>
  );
};

export const BikeListFallback: FC = () => {
  const bikes = [...new Array(12)];

  return (
    <Section title="Danh sách sản phẩm">
      <Box className="grid grid-cols-2 gap-4">
        {bikes.map((_, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const BikeList: FC = () => {
  return (
    <Suspense fallback={<BikeListFallback />}>
      <BikeListContent />
    </Suspense>
  );
};
