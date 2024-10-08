import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "../../components/fullscreen-sheet";
import { Box, Button, Text } from "zmp-ui";

export interface Notification {
  id: string;
  title: string;
  description: string;
  create_date: string;
  image: string;
}

export interface NotificationPickerProps {
  notification: Notification;
  children: (methods: { open: () => void; close: () => void }) => React.ReactNode;
}

export const NotificationPicker: FC<NotificationPickerProps> = ({ children, notification }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {notification && (
            <Box className="space-y-6 mt-2" p={4}>
              <Box className="space-y-2">
                <Text.Title>{notification.title}</Text.Title>
                <Text>{notification.description}</Text>
                
                
                <Text>
                  Ngày tạo: {new Date(notification.create_date).toLocaleDateString()}
                </Text>
              </Box>
              <Box className="space-y-5">
                {/* <img src={notification.image} alt={notification.title} style={{ width: "100%", borderRadius: "8px" }} /> */}
                {/* <Button variant="primary" type="highlight" fullWidth onClick={() => setVisible(false)}>
                  Chọn
                </Button> */}
              </Box>
            </Box>
          )}
        </Sheet>,
        document.body,
      )}
    </>
  );
};
