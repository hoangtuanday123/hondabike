import { FinalPrice } from "../../components/display/final-price";
import React, { FC } from "react";
import { News } from "../../types/product";
import { Box, Text } from "zmp-ui";
import { NewsPicker } from "./news_picker";

export const NewsItem: FC<{ news: News }> = ({ news }) => {
  return (
    <NewsPicker news={news}>
      {({ open }) => (
        <div className="space-y-2" onClick={open}>
          <Box className="w-full aspect-square relative">
            <img
              loading="lazy"
              src={news.image}
              className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
            />
          </Box>
          <Text>{news.title}</Text>
          
          <Text size="xxSmall" className="text-gray pb-2"> {news.create_date} </Text>
          
        </div>
      )}
    </NewsPicker>
  );
};
