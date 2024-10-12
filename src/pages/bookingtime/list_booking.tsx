import { FinalPrice } from "../../components/display/final-price";
import { BookingtimePicker } from "../../components/bookingtime/booking_time_picker";
import { ProductSearchResultSkeleton } from "../../components/skeletons";
import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { BookingtimesState } from "../../state";
import { Box, Text } from "zmp-ui";

const  Content: FC = () => {
    const bookingtimes = useRecoilValue(BookingtimesState);
    return (
      <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
        {/* <Text.Title className="p-4 pt-0" size="small">
          Kết quả ({result.length})
        </Text.Title> */}
        {bookingtimes.length > 0 ? (
          <Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
            {bookingtimes.map((bookingtime) => (
              <BookingtimePicker key={bookingtime.id} bookingtime={bookingtime}>
                {({ open }) => (
                  <div onClick={open} className="flex items-center space-x-4">
                    <img
                      className="w-[88px] h-[88px] rounded-lg"
                      src={bookingtime.image}
                    />
                    <Box className="space-y-2">
                      <Text>{bookingtime.service}</Text>
                      <Text size="xSmall" className="text-gray">
                       Giá: {bookingtime.price.toLocaleString()} VNĐ
                      </Text>
                      <Text>
                      Ngày đặt: {new Date(bookingtime.time).toLocaleDateString('vi-VN')}
                    </Text>
                    </Box>
                  </div>
                )}
              </BookingtimePicker>
            ))}
          </Box>
        ) : (
          <Box className="flex-1 flex justify-center items-center pb-24">
            <Text  className="text-gray">
              Không có danh sách đặt lịch
            </Text>
          </Box>
        )}
      </Box>
    );
  };

  export const ListBooking: FC = () => {
    return (
      <Suspense >
        <Content />
      </Suspense>
    );
  };