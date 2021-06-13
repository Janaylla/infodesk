import React, { useState } from "react";
import { Main, DivAbsolute, IconPassword } from './styled'
import Button from '../../components/Button/Button'
import { IconButton } from '@material-ui/core'
import { CloseOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { goToBack} from '../../Routes/Coordinators'
import { useForm } from '../../hooks/useForm'
import { useSingUp } from '../../hooks/usePostData'
import {Form} from '../../GlobalStyle'
const SingUpPage = () => {
  const initialForm = {
    email:"", 
    password:"", 
    userName:"", 
    lastName:"", 
    firstName:"",
    address: ""
  }
  const [postLogin, snack] = useSingUp(initialForm)
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
      <IconButton onClick={() => goToBack(history)}>
        <CloseOutlined />
      </IconButton>
    </DivAbsolute>
    <Form onSubmit={login}>
      <h1>Sing Up</h1>
      <h2>Becoming our member you will have the opportunity to share experience with other students</h2>
      <label>
        <h3>Fist Name</h3>
        <input name="firstName" value={form['firstName']} onChange={onChange} />
      </label>
      <label>
        <h3>Last Name</h3>
        <input name="lastName" value={form['lastName']} onChange={onChange} />
      </label>
      <label>
        <h3>Address</h3>
        <input name="address" value={form['address']} onChange={onChange} />
      </label>
      <label>
        <h3>User Name</h3>
        <input name="userName" value={form['userName']} onChange={onChange} />
      </label>
      <label>
        <h3>Email</h3>
        <input name="email" value={form['email']} type="email" onChange={onChange} />
      </label>
      <label>
        <h3>Make a password</h3>
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
      <Button color="orange" type="submit">Sing Up</Button>
      {snack}
    </Form>
  </Main>
};

export default SingUpPage;
