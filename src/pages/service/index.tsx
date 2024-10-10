import React, { Suspense } from "react";
import { Box, Page,Button,Text,Header,useNavigate } from "zmp-ui";
// import {ListBooking} from "./list_booking"
// import { Inquiry } from "./inquiry";
// import { Welcome } from "./welcome";
// import { Banner } from "./banner";
// import { Categories } from "./categories";
// import { Recommend } from "./recommend";
//import { NewsList } from "./news_list";
import {ServiceList} from "./list"
import { Divider } from "../../components/divider";

// function navigation_booking(){
//     const navigate = useNavigate();
//     navigate("/booking")
// }  

const ServicePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
     
      <Box className="flex-1 overflow-auto">
      <Header title="Dịch vụ"  />
      
      <Divider />
        {/* <Inquiry /> */}
       
        <Suspense>
          
        </Suspense>
      
        <ServiceList/>
       
        
       
      </Box>
      
      
    </Page>
  );
};

export default ServicePage;
