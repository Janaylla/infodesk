import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (path, initialState) => {
  const [data, setData] = useState(initialState);
  const user = JSON.parse(localStorage.getItem("user"));

  const getData = () => {
    if (user) {
      axios
        .get(`${BASE_URL}${path}`, {
          headers: {
            auth: user.token,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => console.log(err.message));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, getData];
};
