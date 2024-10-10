import React, { FC } from "react";
import { ListRenderer } from "../../components/list-renderer";
import { useRecoilValue } from "recoil";
import { branchState } from "../../state";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "../../components/divider";
import { BranchPicker } from "../../components/branch/picker";
import logo from "../../static/logo.png"
export const BranchList: FC = () => {
  const branchs = useRecoilValue(branchState);
  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={branchs}
        renderLeft={(item) => (
          <img className="w-10 h-10 rounded-full" src={logo} />
        )}
        renderRight={(item) => (
          <BranchPicker branch={item}>
            {({ open }) => (
              <Box key={item.id} onClick={open} className="cursor-pointer">
                <Text.Header>{item.name}</Text.Header>
                <Text size="small" className="text-gray">
                  {item.address}  {/* Đảm bảo item có thuộc tính description */}
                </Text>
              </Box>
            )}
          </BranchPicker>
        )}
      />
    </Box>
  );
};

// const BranchPage: FC = () => {
//   return (
//     <Page>
//       <Header title="Thông báo" showBackIcon={false} />
//       <Divider />
//       <BranchList />
//     </Page>
//   );
// };

// export default BranchPage;
