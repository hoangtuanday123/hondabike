import React from "react";
import { FC } from "react";
import { Box, Input, useNavigate } from "zmp-ui";

export const Inquiry: FC = () => {
  const navigate = useNavigate();
  return (
    <Box p={4} className="bg-white">
      <Input.Search
        onFocus={() => navigate("/search_news")}
        placeholder="Tìm nhanh tin tức ..."
      />
    </Box>
  );
};
