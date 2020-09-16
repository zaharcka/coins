import React, {useCallback, useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import actions from '../../store/actionTypes';

const Wrapper = styled.div`
display: flex;
justify-content: center;
`;

const Table = styled.table`
  text-align: left;

  tr {
    height: 35px;
  }
  th {
    width: 200px;
}
`;

const MOCK_Data = [
    {
        id: 1,
        name: 'Bitcoin',
        cap: '$203 336 625 005',
        price: '$10 996,47',
        volume: '$32 760 608 156',
        change: '1,83%',
    },
    {
        id: 2,
        name: 'Ethereum',
        cap: '$41 146 852 209',
        price: '$365,34',
        volume: '$17 324 623 093',
        change: '-0,89%',
    },
    {
        id: 3,
        name: 'Tether',
        cap: '$14 971 623 126',
        price: '$1,00',
        volume: '$59 198 882 813',
        change: '0,03%',
    },
    {
        id: 4,
        name: 'XRP',
        cap: '$10 992 435 683',
        price: '$0,244047',
        volume: '$2 042 438 446',
        change: '-0,56%',
    },
];


const MainPage = () => {

    const dispatch = useDispatch();
    const dispatchApi = useCallback(() => dispatch({type: actions.GET_DATA}), [dispatch]);

    useEffect(() => {
        dispatchApi();
    });

    return (
        <Wrapper>
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

                {
                    MOCK_Data.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.cap}</td>
                            <td>{item.price}</td>
                            <td>{item.volume}</td>
                            <td>{item.change}</td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>
        </Wrapper>
    )
};

export default MainPage;