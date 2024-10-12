import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "../../components/fullscreen-sheet";
import { Box, Button, Text, List, Icon } from "zmp-ui";

export interface Bookingtime {
    id: number;
    service: string;
    price: number;
    image: string;
    time: string;
    status:string
  }

export interface BookingtimePickerProps {
  bookingtime: Bookingtime;
  children: (methods: { open: () => void; close: () => void }) => React.ReactNode;
}
const { Item } = List;
export const BookingtimePicker: FC<BookingtimePickerProps> = ({ children, bookingtime }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {bookingtime && (
            <Box className="space-y-6 mt-2" p={4}>
              <Box className="space-y-2">
                <Text.Title>{bookingtime.service}</Text.Title>
                <Text>Giá: {bookingtime.price.toLocaleString()} VNĐ</Text>
                <Text>
                  Ngày đặt: {new Date(bookingtime.time).toLocaleDateString('vi-VN')}
                </Text>
                <Text>Trạng thái:{bookingtime.status}</Text>
                
              </Box>
              <Box className="space-y-5">
                {/* <img src={notification.image} alt={notification.title} style={{ width: "100%", borderRadius: "8px" }} /> */}
                <Button variant="primary" type="highlight" fullWidth onClick={() => setVisible(false)}>
                  Hủy
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
