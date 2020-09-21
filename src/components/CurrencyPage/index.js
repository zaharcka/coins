import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyData } from "../../store/actionCreators";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 30px;
  width: 400px;
  margin-top: 50px;
  border: black;
  border-style: solid;
  padding: 30px;
`;

const CurrencyPage = ({ match }) => {
  const {
    params: { cur },
  } = match;

  const dispatch = useDispatch();
  const dispatchData = useCallback(() => dispatch(getCurrencyData(cur)), [
    dispatch,
    cur,
  ]);
  const apiState = useSelector((state) => state.api);

  useEffect(() => {
    dispatchData();
  }, [dispatchData]);

  return (
    <Container>
      <h1>Ticket: {cur}</h1>
      <LineChart
        width={800}
        height={400}
        data={apiState[cur]?.historicalData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="cap" stroke="#ff7300" yAxisId={0} />
      </LineChart>
      <TableContainer>
        <div>Ticket</div>
        <div>{apiState[cur]?.currency}</div>
        <div>Market Capitalisation</div>
        <div>{apiState[cur]?.cap}</div>
        <div>Volume</div>
        <div>{apiState[cur]?.volume}</div>
        <div>Circulating Supply</div>
        <div>{apiState[cur]?.circulatingSupply}</div>
        <div>Max Supply</div>
        <div>{apiState[cur]?.maxSupply}</div>
      </TableContainer>
    </Container>
  );
};

export default CurrencyPage;
