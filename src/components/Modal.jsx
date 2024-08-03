import { useRef } from "react";
import api from '../utils/api';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../store/actions/todoAction';
import { toast } from "react-toastify";


const Modal = ({ close, todo }) => {
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handldeClick = () => {
        //1. adım inputtaki değeri al
        const newText = inputRef.current.value;
//  2. adım todo nesnesinin ttitle değeri ve tarihini güncelle
        const updatedTodo = {
            ...todo,
            text: newText,
            created_at: new Date().toLocaleDateString(),
        };
        //3. adım apı ye güncel veriyi kaydet
       api.put(`/todos/${todo.id}`, updatedTodo)
       //4. adım reducer a elemanın güncelleneceğini haber ver
       .then(() => dispatch(updateTodo(updatedTodo)))
       //5. adım hata olursa yakala
       .catch((err) => alert("üzgünüz bir hata oluştu"))
       //6. adım modalı kapat
       close();

       toast.info("Todo Başarı ile Güncellendi!")
    };
  return (
    <div className="modal bg-black  text-dark bg-opacity-50 d-flex align-items-center justify-content-center">
    <div className="modal-dialog w-75 h-50">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Todo'yu Güncelle</h5>
          <button onClick={close}
           type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <label>Yeni Başlık</label>
          <input ref={inputRef}
          defaultValue={todo.text} type="text" className="form-control shadow mt-2" />
        </div>
        <div className="modal-footer">
          <button onClick={close} type="button" className="btn btn-secondary" data-bs-dismiss="modal">İptal Et</button>
          <button onClick={handldeClick} type="button" className="btn btn-primary">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal;
