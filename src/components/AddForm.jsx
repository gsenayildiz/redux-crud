import React from 'react';
import { v4 } from 'uuid';
import api from '../utils/api';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoAction';
import { toast } from 'react-toastify';


const AddForm = () => {
    //bu bileşen içerisnde dispatch  metodunu kullanmamızı sağlar.
const dispatch = useDispatch()


const handleSubmit = (e) => {
e.preventDefault();
//input boş ise durdur
if(!e.target[0].value) return;
//store a gönderilecek olan veriyi hazırladık
const newTodo = {
    id: v4(),
    text: e.target[0].value,
    is_done: false,
    created_at: new Date().toLocaleDateString(),
};
 //console.log(newTodo);

 api.post("/todos", newTodo)
 .then(() => dispatch(addTodo(newTodo)))
 //istek başarısız olursa çalısır
 .catch((err) => {//hata oluşturmak için throw kullandık
    throw new Error(err.message);
 });

 e.target.reset();

toast.success("Todo Başarı ile Eklendi!")
};

const changeTheme = () => {

};

  return (
   <form onSubmit={handleSubmit}
   className='d-flex gap-3 my-5'>
    <input type="text"  placeholder='Örn: Redux projesi' className='form-control'/>
    <button className='btn btn-warning'>Gönder</button>
    <button className='btn bg-white' onClick={changeTheme}>Light Mode</button>
   </form>
  )
}

export default AddForm;
