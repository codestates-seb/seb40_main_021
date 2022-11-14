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
          {
            id: 3,
            menu: "김치찌개",
            quantity: 1,
            price: 7000,
          },
          {
            id: 4,
            menu: "처음처럼",
            quantity: 2,
            price: 4000,
          },
          {
            id: 5,
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
        reqText: "된장찌개에 된장 빼주세요",
      },
      {
        id: 2,
        tableNum: 7,
        orders: [
          {
            id: 0,
            menu: "부대찌개",
            quantity: 1,
            price: 7000,
          },
          {
            id: 1,
            menu: "공기밥",
            quantity: 2,
            price: 1000,
          },
          {
            id: 2,
            menu: "카스",
            quantity: 5,
            price: 4000,
          },
        ],
        orderTime: { date: "2022-11-10", time: "17:25" },
        reqText: "부대찌개에 부대 빼주세요",
      },
      {
        id: 3,
        tableNum: 3,
        orders: [
          {
            id: 0,
            menu: "매운탕",
            quantity: 1,
            price: 12000,
          },
          {
            id: 1,
            menu: "처음처럼",
            quantity: 10,
            price: 4000,
          },
          {
            id: 2,
            menu: "카스",
            quantity: 5,
            price: 4000,
          },
          {
            id: 3,
            menu: "공기밥",
            quantity: 5,
            price: 1000,
          },
        ],
        orderTime: { date: "2022-11-10", time: "17:25" },
        reqText: "매운탕 안맵게 해주세요",
      },
      {
        id: 4,
        tableNum: 9,
        orders: [
          {
            id: 0,
            menu: "짬뽕",
            quantity: 1,
            price: 7000,
          },
          {
            id: 1,
            menu: "짬뽕밥",
            quantity: 1,
            price: 7000,
          },
          {
            id: 2,
            menu: "탕수육",
            quantity: 5,
            price: 14000,
          },
        ],
        orderTime: { date: "2022-11-10", time: "17:25" },
        reqText: "맛있게 해주세요",
      },
      {
        id: 5,
        tableNum: 15,
        orders: [
          {
            id: 0,
            menu: "불고기버거",
            quantity: 1,
            price: 7000,
          },
          {
            id: 1,
            menu: "새우버거",
            quantity: 2,
            price: 7000,
          },
          {
            id: 2,
            menu: "치즈버거",
            quantity: 5,
            price: 7000,
          },
        ],
        orderTime: { date: "2022-11-10", time: "17:25" },
        reqText: "감자튀김 많이 주세요",
      },
    ],
  };
  return (
    <MainContents>
      <div className="subTitle">
        <label>주문 알람</label>
      </div>
      <div className="orderAlrams">
        <>
          {dummyData.data.map((menu, idx) => {
            return (
              <OrderAlram key={menu.id} menu={menu} idx={idx}></OrderAlram>
            );
          })}
        </>
      </div>
    </MainContents>
  );
};

export default OrderAlarms;

const MainContents = styled.main`
  width: 90%;
  .orderAlrams {
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #a9a9a9;
    }
  }
  .subTitle {
    font-weight: bold;
    font-size: 24px;
    margin: 0 0 5px 20px;
  }
`;
