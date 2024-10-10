import React, { Suspense } from "react";
import { Box, Page,Button,Text,Header,useNavigate } from "zmp-ui";
import {ListBooking} from "./list_booking"
//import { Inquiry } from "./inquiry";
// import { Welcome } from "./welcome";
// import { Banner } from "./banner";
// import { Categories } from "./categories";
// import { Recommend } from "./recommend";
//import { NewsList } from "./news_list";
import { Divider } from "../../components/divider";



const Bookingtime: React.FunctionComponent = () => {
    const navigate = useNavigate();
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
     
      <Box className="flex-1 overflow-auto">
      <Header title="Quản lý đặt lịch"  />
      <Divider />
        {/* <Inquiry /> */}
       
        <Suspense>
          
        </Suspense>
      
        
        <ListBooking/>
        
       
      </Box>
      
      <Button variant="primary" type="highlight" fullWidth onClick={() =>navigate("/booking/branch") }>
            Tạo lịch hẹn mới
        </Button>
    </Page>
  );
};

export default Bookingtime;
