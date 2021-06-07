import React, { useState } from "react";
import { Main, DivAbsolute, IconPassword } from './styled'
import Button from '../../components/Button/Button'
import { IconButton } from '@material-ui/core'
import { CloseOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { goToHome, goToSingUp } from '../../Routes/Coordinators'
import { useForm } from '../../hooks/useForm'
import { useLogin } from '../../hooks/usePostData'
import {Form} from '../../GlobalStyle'
const LoginPage = () => {

  const [postLogin, snack] = useLogin()
  const formInitial = {
    email: "",
    password: ""
  }
  const [form, onChange, resetForm] = useForm(formInitial)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    postLogin(form)
  }
  const onClickPasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }
  return <Main>
    <DivAbsolute>
      <IconButton onClick={() => goToHome(history)}>
        <CloseOutlined />
      </IconButton>
    </DivAbsolute>
    <Form onSubmit={login}>
      <h1>Login</h1>
      <h2>Becoming our member rou will have the opportunity to share your experience with other students</h2>
      <label>
        <h3>E-mail</h3>
        <input name="email" value={form['email']} onChange={onChange} />
      </label>
      <label>
        <h3>Password</h3>
        <input
          name="password"
          value={form['password']}
          onChange={onChange}
          type={passwordVisibility ? "text" : "password"} />
        <IconPassword onClick={onClickPasswordVisibility}>
          {passwordVisibility ?
            <Visibility  /> :
            <VisibilityOff />}
        </IconPassword>
      </label>
      <Button color="orange" type="submit">Login</Button>
      <Button color="blue" onClick={() => goToSingUp(history)}>Sing Up</Button>
      {snack}
    </Form>
  </Main>
};

export default LoginPage;
