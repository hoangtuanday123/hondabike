import React, { FC } from "react";
import { ListRenderer } from "../../components/list-renderer";
import { useRecoilValue } from "recoil";
import { HistoriesState } from "../../state";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "../../components/divider";
import { HistoryPicker } from "../../components/history/history-picker";
import logo from "../static/logo.png"
const HistoryList: FC = () => {
  const Histories = useRecoilValue(HistoriesState);
  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={Histories}
        renderLeft={(item) => (
          <img className="w-[88px] h-[88px] rounded-lg" src={item.image} />
        )}
        renderRight={(item) => (
          <HistoryPicker history={item}>
            {({ open }) => (
                  <div onClick={open} className="flex items-center space-x-4">
                    {/* <img
                      className="w-[88px] h-[88px] rounded-lg"
                      src={item.image}
                    /> */}
                    <Box className="space-y-2">
                      <Text>{item.service}</Text>
                      <Text size="xSmall" className="text-gray">
                       Giá: {item.price.toLocaleString()} VNĐ
                      </Text>
                      <Text>
                      Ngày đặt: {new Date(item.time).toLocaleDateString('vi-VN')}
                    </Text>
                    <Text>
                      Trạng thái: {item.status}
                    </Text>
                    </Box>
                  </div>
                )}
          </HistoryPicker>
        )}
      />
    </Box>
  );
};

const HistoryPage: FC = () => {
  return (
    <Page>
      <Header title="Lịch sử" />
      <Divider />
      <HistoryList />
    </Page>
  );
};

export default HistoryPage;


