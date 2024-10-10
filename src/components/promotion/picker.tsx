import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "../../components/fullscreen-sheet";
import { Box, Button, Text } from "zmp-ui";

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount_type: string;
  discount_value: string;
  start_date: string;
  end_date: string;
  create_date: string;
  image: string;
}

export interface PromotionPickerProps {
  promotion: Promotion;
  children: (methods: { open: () => void; close: () => void }) => React.ReactNode;
}

export const PromotionPicker: FC<PromotionPickerProps> = ({ children, promotion }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {promotion && (
            <Box className="space-y-6 mt-2 overflow-auto" p={4}>
              <Box className="space-y-2">
                <Text.Title>{promotion.title}</Text.Title>
                <Text>{promotion.description}</Text>
                <Text>
                  {promotion.discount_type}: {promotion.discount_value}
                </Text>
                <Text>
                  Ngày bắt đầu: {new Date(promotion.start_date).toLocaleDateString()}
                </Text>
                <Text>
                  Ngày kết thúc: {new Date(promotion.end_date).toLocaleDateString()}
                </Text>
                <Text>
                  Ngày tạo: {new Date(promotion.create_date).toLocaleDateString()}
                </Text>
              </Box>
              <Box className="space-y-5">
                <img src={promotion.image} alt={promotion.title} style={{ width: "100%", borderRadius: "8px" }} />
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
