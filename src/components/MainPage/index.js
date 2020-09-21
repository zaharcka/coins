import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/actionCreators";
import CoinsTable from "../CoinsTable";

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const MainPage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const dispatchApi = useCallback(() => dispatch(getData()), [dispatch]);
  const coins = useSelector((state) => state.api.data);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatchApi();
    }, 3000);

    dispatchApi();

    return () => clearInterval(timer);
  }, [dispatchApi]);

  const coinsPerPage = 20;

  const pageChangeHandler = (increase) => {
    if (increase) {
      page * coinsPerPage < coins.length && setPage(page + 1);
    } else {
      page !== 1 && setPage(page - 1);
    }
  };

  return (
    <div>
      <CoinsTable
        coins={coins.slice((page - 1) * coinsPerPage, page * coinsPerPage)}
      />
      <NavigationContainer>
        <div onClick={() => pageChangeHandler(false)}>Назад</div>
        <div>{`Страница ${page} из ${coins.length / coinsPerPage}`}</div>
        <div onClick={() => pageChangeHandler(true)}>Вперед</div>
      </NavigationContainer>
    </div>
  );
};

export default MainPage;
