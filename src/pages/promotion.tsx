import React, { FC } from "react";
import { ListRenderer } from "../components/list-renderer";
import { useRecoilValue } from "recoil";
import { PromotionsState } from "../state";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "../components/divider";
import { PromotionPicker } from "../components/promotion/picker";
import logo from "../static/logo.png"
const PromotionList: FC = () => {
  const promotions = useRecoilValue(PromotionsState);

  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={promotions}
        renderLeft={() => (
          <img className="w-10 h-10 rounded-full" src={logo} alt="Promotion Logo" />
        )}
        renderRight={(item) => (
          <PromotionPicker promotion={item}>
            {({ open }) => (
              <Box key={item.id} onClick={open} className="cursor-pointer">
                <Text.Header>{item.title}</Text.Header>
                <Text size="small" className="text-gray">
                  {item.discount_value}
                </Text>
              </Box>
            )}
          </PromotionPicker>
        )}
      />
    </Box>
  );
};
const PromotionPage: FC = () => {
  return (
    <Page>
      <Header title="Ưu đãi" showBackIcon={false} />
      <Divider />
      <PromotionList />
    </Page>
  );
};

export default PromotionPage;

