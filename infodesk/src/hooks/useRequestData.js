import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (path, initialState, keyObject) => {
  const [data, setData] = useState(initialState);
  const token = localStorage.getItem("token");
  const getData = () => {
    axios
      .get(`${BASE_URL}${path}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        if (keyObject)
          if(response.data[keyObject]) 
            response.data[keyObject] ? setData(response.data[keyObject]): setData(initialState);
        else {
          response.data ? setData(response.data): setData();
        }
      })
      .catch((err) => {
        console.log(err.message)
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, getData];
};
