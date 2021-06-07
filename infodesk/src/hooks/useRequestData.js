import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (path, initialState, keyObject) => {
  const [data, setData] = useState(initialState);
  const token = localStorage.getItem("token");
  const getData = () => {
    console.log("poo")
      axios
        .get(`${BASE_URL}${path}`, {
          headers: {
            authorization: token,
          },
        })
        .then((response) => {
          if(keyObject)
            setData(response.data[keyObject]);
          else{
            setData(response.data);
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
