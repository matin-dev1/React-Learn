import React, { useContext, useState } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import AddUser from './users/AddUser'
import Todos from './todos/Todos';
import Users from './users/Users';
import EditDesc from './users/EditDesc';
import { Navigate, Route, Routes } from 'react-router-dom';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)
    const [isUser , setIsUser] = useState(false);

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`} 
            onClick={handleShowMenu}
            ></i>

                <Routes>
                    {/*<Route path='/' element={<Navigate replace to ='/posts' />} />*/}
                    <Route path='/user' element={<Users/>}/>
                    <Route path='/user/add' element={<AddUser />}>
                        <Route path=':userId' />
                        {/* <Route path=":userId" element={<EditDesc/>} /> */}
                    </Route>
                    <Route path='/post' element={<Posts/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                    <Route path='/todo' element={<Todos/>}/>
                    <Route path='*' element={<Users/>}/>
                </Routes>

        </div>
    )

}

export default Content;