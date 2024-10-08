import React, { Suspense } from "react";
import { Box, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
// import { Welcome } from "./welcome";
// import { Banner } from "./banner";
// import { Categories } from "./categories";
// import { Recommend } from "./recommend";
import { BikeList } from "./bike-list";
import { Divider } from "../../components/divider";

const OrderPage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
     
      <Box className="flex-1 overflow-auto">
        <Inquiry />
       
        <Suspense>
          
        </Suspense>
        <Divider />
        
        <Divider />
        <BikeList />
        <Divider />
      </Box>
    </Page>
  );
};

export default OrderPage;
