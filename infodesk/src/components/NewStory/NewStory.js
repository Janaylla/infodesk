import React, {useEffect} from 'react';
import {Form} from '../../GlobalStyle'
import {DialogForm, DivAbsolute} from './styled'
import {useForm} from '../../hooks/useForm'
import Button from '../Button/Button'
import { IconButton } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import { usePostData } from '../../hooks/usePostData'

function SimpleDialog({onClose, open, update, topics}) {
  const [storyData, snack, loading, success]= usePostData('/story/create')

  const formInitial = {
    title: "",
    topic: "Documentation",
    text: ""
  }
useEffect(() => {
  if(!loading && success === 1){
      update();
      resetForm(formInitial);
      onClose();
  }
}, [loading])

const [form, onChange, resetForm] = useForm(formInitial)
  
  const newStory = (e) =>{
    e.preventDefault();
    storyData(form)
  }
  return (
    <DialogForm onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
        <DivAbsolute>
      <IconButton onClick={onClose}>
        <CloseOutlined />
      </IconButton>
    </DivAbsolute>
        <Form onSubmit={newStory}>
        <h1>Crete Story</h1>
        
      <label>
        <h3>Title</h3>
        <input name="title" value={form['title']} onChange={onChange}/>
      </label>
      <label>
        <h3>Topic</h3>
        <select name="topic" value={form['topic']} onChange={onChange}>
        { topics.map((i) => {
             return <option>{i.replace(/_/gi, " ")}</option>
        })}
        </select>
      </label>

      <label>
        <h3>Text</h3>
        <textarea name="text" value={form['text']} onChange={onChange} />
      </label>
      <Button type="submit">
          story
      </Button>
    </Form>

    </DialogForm>
  );
}

export default function SimpleDialogDemo({open, setOpen, update, topics}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} topics={topics} onClose={handleClose} update={update} />
    </div>
  );
}