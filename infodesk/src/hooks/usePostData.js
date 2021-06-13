import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import Snackbar from '../components/Snackbar/Snackbar'
import {useHistory} from 'react-router-dom'
import {goToHome} from '../Routes/Coordinators'

export const usePostData = (path) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(0);
  const [snack, setSnack] = useState();
  
  const token = localStorage.getItem("token");

  const postData = (body) => {
        setSuccess(0)
        setLoading(true)
        setSnack()
      axios
        .put(`${BASE_URL}${path}`, body, {
          headers: {
            authorization: token,
          },
        })
        .then(() => {
            setSuccess(1)
            setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setSuccess(-1)
          setLoading(false)
          setSnack(<Snackbar text={"Check the data and try again"}/>)
        });
  };


  return [postData, snack, loading, success];
};
export const useLogin = () =>{
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(0);
  const [snack, setSnack] = useState();
  const history = useHistory()
  const login = (body) => {
        setSuccess(0)
        setLoading(true)
        setSnack()
      axios
        .post(`${BASE_URL}${'/login'}`, body, {
        })
        .then((response) => {
            setSuccess(1)
            setLoading(false)
            localStorage.setItem("token", response.data.token)
            setSnack(<Snackbar text="Login successfully" success/>)
            setTimeout(()=> {
                goToHome(history)
            }, 300)
        })
        .catch((err) => {
          console.log(err.message)
          setSuccess(-1)
          setLoading(false)
          setSnack(<Snackbar text="Incorrect email and/or password" />)
        });
  }   
  return [login, snack, loading, success];
}
export const useSingUp = () =>{
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(0);
  const [snack, setSnack] = useState();
  const history = useHistory()
  const login = (body) => {
        setSuccess(0)
        setLoading(true)
        setSnack()
      axios
        .post(`${BASE_URL}${'/singUp'}`, body, {
        })
        .then((response) => {
            setSuccess(1)
            setLoading(false)
            localStorage.setItem("token", response.data.token)
            setSnack(<Snackbar text="Sing Up successfully" success/>)
            setTimeout(()=> {
                goToHome(history)
            }, 300)
        })
        .catch((err) => {
          setSuccess(-1)
          setLoading(false)
          setSnack(<Snackbar text={"Check your data and try again"} />)
        });
  }   
  return [login, snack, loading, success];
}

export const useEditProfile = () =>{
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(0);
  const [snack, setSnack] = useState();
  const token = localStorage.getItem("token");

  const login = (body) => {
        setSuccess(0)
        setLoading(true)
        setSnack()
      axios
        .put(`${BASE_URL}${'/profile'}`, body, {
          headers: {
            authorization: token,
          },
        })
        .then(() => {
            setSuccess(1)
            setLoading(false)
        })
        .catch((err) => {
          setSuccess(-1)
          setLoading(false)
          setSnack(<Snackbar text={"Check your data and try again"} />)
        });
  }   
  return [login, snack, loading, success];
}