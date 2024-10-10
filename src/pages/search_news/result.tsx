import { FinalPrice } from "../../components/display/final-price";
import { NewsPicker } from "../../components/product/news_picker";
import { ProductSearchResultSkeleton } from "../../components/skeletons";
import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { resultnewsState } from "../../state";
import { Box, Text } from "zmp-ui";

const SearchResultContent: FC = () => {
  const result = useRecoilValue(resultnewsState);
  return (
    <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
      <Text.Title className="p-4 pt-0" size="small">
        Kết quả ({result.length})
      </Text.Title>
      {result.length > 0 ? (
        <Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
          {result.map((news) => (
            <NewsPicker key={news.id} news={news}>
              {({ open }) => (
                <div className="flex items-center space-x-4" onClick={open}>
                  
                    <img
                      className="w-[88px] h-[88px] rounded-lg"
                      src={news.image}
                    />
                  <Box className="space-y-2">
                  <Text>{news.title}</Text>

                  <Text size="xxSmall" className="text-gray pb-2"> {news.title} </Text>
                  </Box>
                </div>
              )}
            </NewsPicker>
          ))}
        </Box>
      ) : (
        <Box className="flex-1 flex justify-center items-center pb-24">
          <Text size="xSmall" className="text-gray">
            Không tìm thấy kết quả. Vui lòng thử lại
          </Text>
        </Box>
      )}
    </Box>
  );
};

const SearchResultFallback: FC = () => {
  const result = [...new Array(5)];
  return (
    <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
      <Text.Title className="p-4 pt-0" size="small">
        Đang tìm kiếm...
      </Text.Title>
      <Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
        {result.map((_, i) => (
          <ProductSearchResultSkeleton key={i} />
        ))}
      </Box>
    </Box>
  );
};

export const SearchResult: FC = () => {
  return (
    <Suspense fallback={<SearchResultFallback />}>
      <SearchResultContent />
    </Suspense>
  );
};
