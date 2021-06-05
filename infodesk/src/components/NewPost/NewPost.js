import React, {useState} from 'react';
import {Form} from '../../GlobalStyle'
import {DialogForm, DivAbsolute} from './styled'
import {useForm} from '../../hooks/useForm'
import Button from '../../components/Button/Button'
import { IconButton } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import { usePostData } from '../../hooks/usePostData'

function SimpleDialog({onClose, selectedValue, open }) {
  const [postData, loading, success]= usePostData('/post/create')
const formInitial = {
  text: "",
  accommodation: "",
  price: ""
}
const [form, onChange, resetForm] = useForm(formInitial)
  const handleClose = () => {
    onClose(selectedValue);
  };
  const newPost = (e) =>{
    e.preventDefault();
    postData(form)
  }
  return (
    <DialogForm onSubmit={newPost} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DivAbsolute>
      <IconButton onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </DivAbsolute>
        <Form onSubmit={newPost}>
        <h1>Crete Post</h1>
      <label>
        <h3>Type of accommodation</h3>
        <input name="accommodation" value={form['accommodation']} onChange={onChange} />
      </label>
      <label>
        <h3>Price</h3>
        <input name="price" value={form['price']} onChange={onChange}/>
      </label>
      <label>
        <h3>Place(City, neighbourhood)</h3>
        <input name="place" value={form['place']} onChange={onChange} />
      </label>

      <label>
        <h3>Description</h3>
        <textarea name="description" value={form['description']} onChange={onChange} />
      </label>
      <Button type="submit">
          Post
      </Button>
    </Form>

    </DialogForm>
  );
}

export default function SimpleDialogDemo({open, setOpen}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}