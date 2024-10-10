import React, { FC, useState,Suspense } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "../../components/fullscreen-sheet";
import { Box, Button, Text, List, Icon,Input,DatePicker } from "zmp-ui";

export interface Service {
  id: number;
  name: string;
  price: number;
  image: string;
  detail: string;
}


export interface ServicePickerProps {
  service: Service;
  children: (methods: { open: () => void; close: () => void }) => React.ReactNode;
}
const { Item } = List;
export const ServicePicker: FC<ServicePickerProps> = ({ children, service }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {service && (
            <Box className="space-y-6 mt-2 overflow-auto" p={4} >
              <Box className="space-y-2">
                <Text.Title>{service.name}</Text.Title>
                <Text>Giá: {service.price.toLocaleString()} VNĐ</Text>
                <Text>{service.detail}</Text>
                <Box mt={6}>
                <DatePicker
                  label='Chọn ngày và giờ'
                  helperText='Helper text'
                  mask
                  maskClosable
                  dateFormat='dd/mm/yyyy'
                  title='Chọn ngày và giờ'
                />
              </Box>
                
              </Box>
              <Box className="space-y-5">
                <img src={service.image} alt={service.name} style={{ width: "100%", borderRadius: "8px" }} />
                <Button variant="primary" type="highlight" fullWidth onClick={() => setVisible(false)}>
                  Chọn
                </Button>
              </Box>
            </Box>
          )}
        </Sheet>,
        document.body,
      )}
    </>
  );
};
