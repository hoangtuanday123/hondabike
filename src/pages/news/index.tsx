import React, { Suspense } from "react";
import { Box, Page,Header } from "zmp-ui";
import { Inquiry } from "./inquiry";
// import { Welcome } from "./welcome";
// import { Banner } from "./banner";
// import { Categories } from "./categories";
// import { Recommend } from "./recommend";
import { NewsList } from "./news_list";
import { Divider } from "../../components/divider";

const OrderPage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
     <Header title="Tin Tức"/>
      <Box className="flex-1 overflow-auto">
        <Inquiry />
       
        <Suspense>
          
        </Suspense>
        <Divider />
        
        <Divider />
        <NewsList />
        <Divider />
      </Box>
    </Page>
  );
};

export default OrderPage;
