import React, { FC, Suspense } from "react";
import { Section } from "../../components/section";
import { useRecoilValue } from "recoil";
import { newsState } from "../../state";
import { Box } from "zmp-ui";
import { NewsItem } from "../../components/product/new_item";
import { ProductItemSkeleton } from "../../components/skeletons";

export const NewsListContent: FC = () => {
    const newss = useRecoilValue(newsState);
  
    return (
      <Section title="Tin Tức">
        <Box className="grid grid-cols-2 gap-4">
          {newss.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Box>
      </Section>
    );
  };

export const NewsListFallback: FC = () => {
  const newss = [...new Array(12)];

  return (
    <Section title="Tin Tức">
      <Box className="grid grid-cols-2 gap-4">
        {newss.map((_, i) => (
          <ProductItemSkeleton key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const NewsList: FC = () => {
  return (
    <Suspense fallback={<NewsListFallback />}>
      <NewsListContent />
    </Suspense>
  );
};
