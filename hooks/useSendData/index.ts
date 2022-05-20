import { PredictRequest, PredictResponse } from "./types";
import { predictRequestAtom } from "./../../store/Store";
import { useAtom } from "jotai";
import axios from "axios";

const useSendData = () => {
  const sendData = async (data: PredictRequest) => {
    // console.log(data);

    const response = await axios.post<PredictResponse>(
      "http://165.22.110.26:5000/predicts",
      data
    );

    // console.log(response.data);

    if (response.data) return response.data;

    return null;
  };

  return { sendData };
};

export default useSendData;
