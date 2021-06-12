import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import Snackbar from '../components/Snackbar/Snackbar'
import {useHistory} from 'react-router-dom'
import {goToHome} from '../Routes/Coordinators'


export const useDelDate = (path) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(0);
  const token = localStorage.getItem("token");
  const delDate = (id) => {
        setSuccess(0)
        setLoading(true)
        console.log(`${BASE_URL}${path}/${id}`);
      axios
        .delete(`${BASE_URL}${path}/${id}`, {
          headers: {
            authorization: token,
          },
        })
        .then((response) => {
            setSuccess(1)
            setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setSuccess(-1)
          setLoading(false)
        });
  };


  return [delDate, loading, success];
};