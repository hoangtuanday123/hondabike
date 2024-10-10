import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "../../components/fullscreen-sheet";
import { Box, Button, Text, List, Icon } from "zmp-ui";

export interface Branch {
  id: number;
  name: string;
  image: string;
  address: string;
}

export interface BranchPickerProps {
  branch: Branch;
  children: (methods: { open: () => void; close: () => void }) => React.ReactNode;
}
const { Item } = List;
export const BranchPicker: FC<BranchPickerProps> = ({ children, branch }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {branch && (
            <Box className="space-y-6 mt-2" p={4}>
              <Box className="space-y-2">
                <Text.Title>{branch.name}</Text.Title>
                <Text>{branch.address}</Text>

                <List>
                  
                  <Item
                    title="Chọn chi nhánh"
                    suffix={<Icon icon="zi-chevron-right" />}
                    subTitle="subtitle"
                  />
                  <Item
                    title="Chọn dịch vụ"
                    suffix={<Icon icon="zi-chevron-right" />}
                    subTitle="subtitle"
                  />
                  <Item
                    title="Chọn ngày và giờ"
                    suffix={<Icon icon="zi-chevron-right" />}
                    subTitle="subtitle"
                  />
                </List>
              </Box>
              <Box className="space-y-5">
                {/* <img src={notification.image} alt={notification.title} style={{ width: "100%", borderRadius: "8px" }} /> */}
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
