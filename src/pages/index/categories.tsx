import React, { useState } from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, selectedCategoryIdState } from "../../state";
import { useNavigate } from "react-router";

export const Categories: FC = () => {
  const categories = useRecoilValue(categoriesState);
  const navigate = useNavigate();
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

  // Trạng thái để lưu số điện thoại hiển thị
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const closePhoneNumber = () => {
    setShowPhoneNumber(false);
   
  };
  // Hàm xử lý khi nhấp vào một danh mục
  const gotoCategory = (categoryId: string) => {
    if (categoryId === 'contact') {
      // Hiển thị số điện thoại
      setShowPhoneNumber(true);
      // window.location.href = "tel:0123456789";
    } else {
      // Đặt ID danh mục đã chọn và điều hướng đến trang danh mục
      //setSelectedCategoryId(categoryId);
      navigate("/"+categoryId);
    }
  };

  return (
    <>
      <Box className="bg-white grid grid-cols-4 gap-4 p-4">
        {categories.map((category, i) => (
          <div
            key={i}
            onClick={() => gotoCategory(category.id)}
            className="flex flex-col space-y-2 items-center"
          >
            <img className="w-12 h-12" src={category.icon} alt={category.name} />
            <Text size="xxSmall" className="text-gray">
              {category.name}
            </Text>
          </div>
        ))}
      </Box>

      {/* Hiển thị số điện thoại nếu người dùng nhấp vào "Liên hệ" */}
      {showPhoneNumber && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded shadow-lg"
          style={{ zIndex: 1000 }} // Đảm bảo rằng phần tử được hiển thị trên cùng
        >
          <div className="flex justify-between items-center">
            <Text size="large" className="text-black">
              tel: 0123-456-789
            </Text>
            {/* Nút tắt */}
            <button
              className="ml-4 text-red-500"
              onClick={closePhoneNumber}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
};
