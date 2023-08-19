import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { emptyFormValues } from './shared/resetValues';

const baseUrl = "https://users-crud.academlo.tech/"



function App() {
  const [users, setUsers] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false)
  const [isUserUpdate, setIsUserUpdate] = useState(null)


  const getAllUsers = () => {
    axios
      .get(baseUrl + "users/")
      .then(({data}) => setUsers(data))
      .catch((err) => console.log(err))
  };

  const createUser = (newUser, reset) =>{
    axios
      .post(baseUrl + "users/", newUser)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(emptyFormValues);
      })
      .catch((err) => console.log(err))
  };

  const deleteUser = (idUser) => {
    axios
      .delete(baseUrl + `users/${idUser}/`)
      .then(({data}) => getAllUsers(data))
      .catch((err) => console.log(err))
  };

  const updateUser = (userUpdate, reset) =>{
    axios
      .put(baseUrl + `users/${isUserUpdate.id}/`, userUpdate)
      .then(() => {
        getAllUsers()
        setIsShowModal(false)
        reset(emptyFormValues)
        setIsUserUpdate(null)
      })
      .catch((err) => console.log(err))
  };

  const handleClickUpdateUser = (user) =>{
    setIsShowModal(true)
    setIsUserUpdate(user)
};

  const handleClickOpenModal = () => {
    setIsShowModal(true)
  };

  useEffect(() =>{
    getAllUsers();
  }, []);



  return (
    <>
      <header className='flex justify-between p-5'>
        <h1 className='text-[50px] font-bold'>Usuarios</h1>
        <button onClick={handleClickOpenModal} className='relative top-6 bg-[#555A88]/80 w-[227px] h-[45px] cursor-pointer text-white'>+ Crear nuevo usuario </button>
      </header>
      <main>
        <UserForm 
        createUser={createUser}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        updateUser={updateUser}
        isUserUpdate={isUserUpdate}
        setIsUserUpdate={setIsUserUpdate}/>
        <UserList users={users}
        deleteUser={deleteUser}
        handleClickUpdateUser={handleClickUpdateUser}/>
      </main>
    </>
  )
}

export default App
