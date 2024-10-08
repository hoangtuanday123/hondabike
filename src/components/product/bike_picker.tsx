import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "../../components/fullscreen-sheet";
import { Box, Button, Text } from "zmp-ui";

export interface Bike {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    promotion:string
    
  }

export interface BikePickerProps {
  bike: Bike;
  children: (methods: { open: () => void; close: () => void }) => React.ReactNode;
}

export const BikePicker: FC<BikePickerProps> = ({ children, bike }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {bike && (
            <Box className="space-y-6 mt-2" p={4}>
              <Box className="space-y-2">
                <Text.Title>{bike.name}</Text.Title>
                <Text>Mô tả: {bike.description}</Text>
                <Text>Giá: {bike.price.toLocaleString()} VNĐ</Text>
                {bike.promotion && (
                  <Text>
                    Khuyến mãi: {bike.promotion}
                  </Text>
                )}
                
              </Box>
              <Box className="space-y-5">
              <img src={bike.image} alt={bike.name} style={{ width: "100%", borderRadius: "8px" }} />
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
