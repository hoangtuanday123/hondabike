import React, { Suspense } from "react";
import { Box, Page,Header } from "zmp-ui";

// import { Welcome } from "./welcome";
// import { Banner } from "./banner";
// import { Categories } from "./categories";
// import { Recommend } from "./recommend";
import {InformationComponent} from "./information"
import { Divider } from "../../components/divider";

const InformationPage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
     <Header title="Thông tin cá nhân"/>
      <Box className="flex-1 overflow-auto">
        
       
        <Suspense>
          <InformationComponent/>
        </Suspense>
      </Box>
    </Page>
  );
};

export default InformationPage;
