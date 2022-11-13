import React from "react";
import OrderAlram from "./OrderAlram";
import styled from "styled-components";

const OrderAlarms = () => {
  const dummyData = {
    data: [
      {
        id: 0,
        tableNum: 3,
        orders: [
          {
            id: 0,
            menu: "김치찌개",
            quantity: 1,
            price: 7000,
          },
          {
            id: 1,
            menu: "처음처럼",
            quantity: 2,
            price: 4000,
          },
          {
            id: 2,
            menu: "카스",
            quantity: 5,
            price: 4000,
          },
        ],
        orderTime: { date: "2022-11-10", time: "17:25" },
        reqText: "김치찌개에 김치 빼주세요",
      },
      {
        id: 1,
        tableNum: 5,
        orders: [
          {
            id: 0,
            menu: "된장찌개",
            quantity: 2,
            price: 7000,
          },
          {
            id: 1,
            menu: "카스",
            quantity: 5,
            price: 4000,
          },
          {
            id: 2,
            menu: "공기밥",
            quantity: 2,
            price: 1000,
          },
        ],
        orderTime: { date: "2022-11-10", time: "17:25" },
        reqText: "김치찌개에 김치 빼주세요",
      },
    ],
  };
  return (
    <MainContents>
      {dummyData.data.map((menu, idx) => {
        return <OrderAlram key={menu.id} menu={menu} idx={idx}></OrderAlram>;
      })}
    </MainContents>
  );
};

export default OrderAlarms;

const MainContents = styled.main`
  width: 100%;
  height: 100%;
`;
