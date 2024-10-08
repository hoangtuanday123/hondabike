import React, { FC } from "react";
import { ListRenderer } from "../components/list-renderer";
import { useRecoilValue } from "recoil";
import { NotificationsState } from "../state";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "../components/divider";
import { NotificationPicker } from "../components/notification/picker";
import logo from "../static/logo.png"
const NotificationList: FC = () => {
  const notifications = useRecoilValue(NotificationsState);
  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={notifications}
        renderLeft={(item) => (
          <img className="w-10 h-10 rounded-full" src={logo} />
        )}
        renderRight={(item) => (
          <NotificationPicker notification={item}>
            {({ open }) => (
              <Box key={item.id} onClick={open} className="cursor-pointer">
                <Text.Header>{item.title}</Text.Header>
                <Text size="small" className="text-gray">
                  {item.description}  {/* Đảm bảo item có thuộc tính description */}
                </Text>
              </Box>
            )}
          </NotificationPicker>
        )}
      />
    </Box>
  );
};

const NotificationPage: FC = () => {
  return (
    <Page>
      <Header title="Thông báo" showBackIcon={false} />
      <Divider />
      <NotificationList />
    </Page>
  );
};

export default NotificationPage;
