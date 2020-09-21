import { takeEvery, call, put } from "@redux-saga/core/effects";
import actions from "../actionTypes";
import request from "superagent";
import { setCurrencyData, setData } from "../actionCreators";

function* getData() {
  try {
    const response = yield call(() => request.get(`http://127.0.0.1:3743/`));
    const parseData = JSON.parse(response.body).data;
    yield put(setData(parseData));
  } catch (e) {
    console.log("Error in saga");
    yield put(setData("error"));
  }
}

function* getCurrencyData({ data }) {
  try {
    //There should be an API call here. But since the world is imperfect and unfair, let's make a substitution.
    yield put(
      setCurrencyData({
        currency: data,
        cap: 201641251378,
        volume: 23860744227,
        circulatingSupply: 18495037,
        maxSupply: 21000000,
        historicalData: [
          {
            date: "12 Sep. 2020",
            cap: 201856963369,
          },
          {
            date: "13 Sep. 2020",
            cap: 202405809881,
          },
          {
            date: "14 Sep. 2020",
            cap: 202475761712,
          },
          {
            date: "15 Sep. 2020",
            cap: 202942925722,
          },
          {
            date: "16 Sep. 2020",
            cap: 199641896762,
          },
          {
            date: "17 Sep. 2020",
            cap: 197484272947,
          },
          {
            date: "18 Sep. 2020",
            cap: 190870759062,
          },
        ],
      })
    );
  } catch (e) {
    console.log("Error in getting currency");
  }
}

export default function* () {
  yield takeEvery(actions.GET_DATA, getData);
  yield takeEvery(actions.GET_CURRENCY_DATA, getCurrencyData);
}
