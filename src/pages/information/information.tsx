import React ,{useState }from "react";
import { FC } from "react";
import { Box, Input, useNavigate,Select,Button } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { informationState } from "../../state";
const { Option, OtpGroup } = Select;
export const InformationComponent: React.FunctionComponent = () => {
  const information = useRecoilValue(informationState);
  
  return (
    <>
    <Box className="m-4">
      <div className="section-container">
        <div className="section-body">
          <div className="row">
            <Input
              type="text"
              label="Họ Và Tên"
              helperText="Helper text"
              placeholder="Placeholder"
              value={information[0].fullname} // assuming information is an array
            />
          </div>
          <div className="row">
            <Input
              type="text"
              label="Số điện thoại"
              helperText="Helper text"
              placeholder="Placeholder"
              clearable
              status="success"
              disabled
              value={information[0].phone}
            />
            </div>
            <div className="row">
            <Input
              type="text"
              label="Email"
              helperText="Helper text"
              placeholder="Placeholder"
              value={information[0].email} // assuming information is an array
            />
          </div>
          <div className="row">
            <Input
              type="text"
              label="Số điện thoại"
              helperText="Helper text"
              placeholder="Placeholder"
              clearable
              status="success"
              disabled
              value={information[0]?.dob ? new Date(information[0].dob).toLocaleDateString('vi-VN') : ''}
            />
            </div>
            <div className="row">
            <Select
            label="Label"
            helperText="Helper text"
            placeholder="Placeholder"
            
            defaultValue={information[0].sex}
          >
           
              <Option value="Nam" title="Nam" />
              <Option value="Nữ" title="Nữ" />
            
            
          </Select>

            </div>
            <div className="row">
            <Button variant="primary" type="highlight" fullWidth onClick={() => setVisible(false)}>
                  Cập nhật
                </Button>
            </div>
        </div>
      </div>
      </Box>
    </>
  );
};
