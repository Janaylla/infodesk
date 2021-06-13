import React, { useState, useEffect } from "react";
import Button from '../../../components/Button/Button'
import { IconButton } from '@material-ui/core'
import { CloseOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
import { useForm } from '../../../hooks/useForm'
import { useEditProfile } from '../../../hooks/usePostData'
import {Form} from '../../../GlobalStyle'
import {DialogForm, DivAbsolute, IconPassword} from './styled'

function SimpleDialog({onClose, open, update, user}) {
  const {LastName,FirstName,Email,Address,UserName}= user;
  const formInitial = {
    email:Email, 
    password:"", 
    userName:UserName, 
    lastName: LastName, 
    firstName: FirstName,
    address: Address
  }
  const [postEdit, snack, loading, success] = useEditProfile()
 
  const [form, onChange, resetForm] = useForm(formInitial)
  
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const edit = (e) => {
    e.preventDefault();
    postEdit(form)
  }
  const onClickPasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }
  useEffect(() => {
    if(!loading && success === 1){
      update();
      onClose();
    }
  },[loading])
    return (
    <DialogForm onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
        <DivAbsolute>
      <IconButton onClick={onClose}>
        <CloseOutlined />
      </IconButton>
    </DivAbsolute>
    <Form onSubmit={edit}>
      <h1>Edit Profile</h1>
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
        <h3>Enter old password</h3>
        <input
          name="oldPassword"
          value={form['oldPassword']}
          onChange={onChange}
          type={passwordVisibility ? "text" : "password"} />
        <IconPassword onClick={onClickPasswordVisibility}>
          {passwordVisibility ?
            <Visibility  /> :
            <VisibilityOff />}
        </IconPassword>
      </label>
       <label>
        <h3>Make new password</h3>
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

    </DialogForm>
  );
}

export default function SimpleDialogDemo({open, setOpen, update, user}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} update={update}user={user} />
    </div>
  );
}
