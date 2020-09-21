import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Table = styled.table`
  text-align: left;
  margin-right: auto;
  margin-left: auto;
  tr {
    height: 35px;
  }
  th {
    width: 200px;
  }
`;

const CoinsTable = ({ coins }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Капитализация</th>
          <th>Цена за единицу</th>
          <th>Объем рынка</th>
          <th>Изменние за 24 часа</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((item) => (
          <tr key={item.id}>
            <td>
              <Link to={`/currency/${item.symbol}`}>{item.name}</Link>
            </td>
            <td>{`$${Math.floor(item.quote.USD.market_cap * 100) / 100}`}</td>
            <td>{`$${Math.floor(item.quote.USD.price * 100) / 100}`}</td>
            <td>{`$${Math.floor(item.quote.USD.volume_24h * 100) / 100}`}</td>
            <td>{`${
              Math.floor(item.quote.USD.percent_change_24h * 100) / 100
            }%`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoinsTable;
