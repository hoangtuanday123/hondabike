import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "../../components/fullscreen-sheet";
import { Box, Button, Text } from "zmp-ui";

export interface News {
    id: number;
    title: string;
    image: string;
    description: string;
    create_date:string
    
  }

export interface NewsPickerProps {
  news: News;
  children: (methods: { open: () => void; close: () => void }) => React.ReactNode;
}

export const NewsPicker: FC<NewsPickerProps> = ({ children, news }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false),
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)} autoHeight>
          {news && (
            <Box className="space-y-6 mt-2 overflow-auto" p={4}>
              <Box className="space-y-2">
                <Text.Title>{news.title}</Text.Title>
                <Text>{news.create_date}</Text>
                <Text>Mô tả: {news.description}</Text>
               
                
              </Box>
              <Box className="space-y-5">
              <img src={news.image} alt={news.title} style={{ width: "100%", borderRadius: "8px" }} />
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
