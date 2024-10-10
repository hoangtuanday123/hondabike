import React, { FC, Suspense } from "react";
import { Section } from "../../components/section";
import { useRecoilValue } from "recoil";
import {serviceState } from "../../state";
import { Box } from "zmp-ui";
import { ServicesItem } from "../../components/product/service_item";
import { ProductItemSkeleton } from "../../components/skeletons";

export const ServiceListContent: FC = () => {
    const services = useRecoilValue(serviceState);
  
    return (
      <Section title="Tin Tức">
        <Box className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <ServicesItem key={service.id} service={service} />
          ))}
        </Box>
      </Section>
    );
  };

export const ServiceListFallback: FC = () => {
  const newss = [...new Array(12)];

  return (
    <Section title="Tin Tức">
      <Box className="grid grid-cols-2 gap-4">
        {newss.map((_, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const ServiceList: FC = () => {
  return (
    <Suspense fallback={<ServiceListFallback />}>
      <ServiceListContent />
    </Suspense>
  );
};
