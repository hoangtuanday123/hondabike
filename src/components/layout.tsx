import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "../pages/index";
import CategoryPage from "../pages/category";
import CartPage from "../pages/cart";
import NotificationPage from "../pages/notification";
import ProfilePage from "../pages/profile";
import SearchPage from "../pages/search";
import SearchbikePage from "../pages/search_bike";
import SearchnewsPage from "../pages/search_news"
import CheckoutResultPage from "../pages/result";
import PromotionPage from "../pages/promotion"
import OrderPage from "../pages/order"
import NewPage from "../pages/news"
import Bookingtime from "../pages/bookingtime"
import BookingPage from "../pages/booking";
import ServicePage from "../pages/service"
import { getSystemInfo } from "zmp-sdk";
import { ScrollRestoration } from "./scroll-restoration";
import { useHandlePayment } from "../hooks";

if (import.meta.env.DEV) {
  document.body.style.setProperty("--zaui-safe-area-inset-top", "24px");
} else if (getSystemInfo().platform === "android") {
  const statusBarHeight =
    window.ZaloJavaScriptInterface?.getStatusBarHeight() ?? 0;
  const androidSafeTop = Math.round(statusBarHeight / window.devicePixelRatio);
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`
  );
}

export const Layout: FC = () => {
  useHandlePayment();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/notification" element={<NotificationPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/result" element={<CheckoutResultPage />}></Route>
          <Route path="/promotion" element={<PromotionPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/search_bike" element={<SearchbikePage />}></Route>
          <Route path="/news" element={<NewPage />}></Route>
          <Route path="/search_news" element={<SearchnewsPage />}></Route>
          <Route path="/booking_time" element={<Bookingtime />}></Route>
          <Route path="/booking/branch" element={<BookingPage />}></Route>
          <Route path="/booking/branch/:id/services" element={<ServicePage />}></Route>
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
