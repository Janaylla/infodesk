import { BASE_URL } from "../constants/urls";
import axios from "axios";
import {
  goToSignUpAddress,
  goToHome
} from "../Routes/Coordinators";

export const signup = (body, history, setSnack, setLoading) => {
  setLoading(true);
  setSnack({ text: "" });
  axios
    .post(`${BASE_URL}signup`, body)
    .then((res) => {
      setLoading(false);
      console.log(res);
      localStorage.setItem("token", res.data.token);
      goToSignUpAddress(history);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setSnack({
        text:
          "Não foi possível criar cadastro. Verifique se e-mail e/ou CPF já estão registrados em outra conta!",
        sucess: false,
      });
    });
};

export const login = (body, history, setSnack, setLoading) => {
  setSnack({ text: "" });

  setLoading(true);
  axios
    .post(`${BASE_URL}login`, body)
    .then((res) => {
       localStorage.setItem("token", res.data.token);
      setLoading(false);
      if (!res.data.user.hasAddress) {
        goToSignUpAddress(history);
      } else {
        goToHome(history);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setSnack({ text: "E-mail e/ou senha incorreta", sucess: false });
    });
};
