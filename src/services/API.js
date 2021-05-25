import { BASE_URL } from "../constants/urls";
import axios from "axios";
import {
  goToSignUpAddress,
  goToHome,
  goToProfile,
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

export const putAddress = (body, history, goTo, setSnack, setLoading) => {
  setLoading(true);
  const token = localStorage.getItem("token");
  setSnack({ text: "" });
  axios
    .put(`${BASE_URL}address`, body, {
      headers: {
        auth: token,
      },
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("user", res.data.token);
      goTo(history);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setSnack({
        text: "Não foi possível adicionar endereço, tente novamente!",
        sucess: false,
      });
    });
};

export const updateProfile = (body, history, setSnack, setLoading) => {
  setLoading(true);
  setSnack({ text: "" });
  const token = localStorage.getItem("token");
  axios
    .put(`${BASE_URL}profile`, body, {
      headers: {
        auth: token,
      },
    })
    .then((res) => {
      console.log(res);
      goToProfile(history);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setSnack({
        text: "Não foi possível atualizar seus dados. Tente novamente!",
        sucess: false,
      });
    });
};

export const updateAddress = (body, history, setSnack, setLoading) => {
  putAddress(body, history, goToProfile, setSnack, setLoading);
};

export const addAddress = (body, history, setSnack, setLoading) => {
  putAddress(body, history, goToHome, setSnack, setLoading);
};

export const placeOrder = (
  products,
  paymentMethod,
  restaurantId,
  setCart,
  setRestaurant,
  setSnack,
  setLoading
) => {
  const token = localStorage.getItem("token");
  setLoading(true);
  setSnack({ text: "" });
  const body = {
    products,
    paymentMethod,
  };
  axios
    .post(`${BASE_URL}restaurants/${restaurantId}/order`, body, {
      headers: {
        auth: token,
      },
    })
    .then((res) => {
      console.log(res);
      setCart([]);
      setLoading(false);
      setRestaurant({});
      setSnack({ text: "Pedido enviado com sucesso!", sucess: true });
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setSnack({
        text: "Não foi possível fazer seu pedido. Tente novamente!",
        sucess: false,
      });
    });
};
