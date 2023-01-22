//1. useState, useEffect
import React, {useState, useEffect} from "react";
//2. gunakan useDispatch 
import { useDispatch, useSelector } from "react-redux";
//3. import useNavigate
import { useNavigate } from "react-router-dom";
//4. 
import {LoginUser, reset} from "../features/authSlice";

const Login = () => {
    //5. membuat state baru
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //8.
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //9. ambil value dr reduc store.js
    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);


    //13. 
    useEffect(() => {
        if(user || isSuccess){
            navigate("/dashboard");
        }
        //14. reset lagi statenya
        dispatch(reset());
    },[user, isSuccess, dispatch, navigate]);

    //11. membuat method 
    const Auth = (e) => {
        e.preventDefault();
        //12. dispatch function login user
        dispatch(LoginUser({email, password}));
    }

    return(
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            {/*10. tambah onSubmit*/}
                            <form onSubmit={Auth} className='box'>
                                {/*15. menampilkan pesan error*/}
                               {isError && <p className="has-text-centered">{message}</p>}
                              <h1 className="title is-2">Sign In</h1>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        {/*6. tambahkan value ngambil dr email, onChange untuk menangkap event, setEmail adl function untk merunah statenya, */}
                                        <input type="text" className="input" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Email'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        {/*7.*/}
                                        <input type="password" className="input" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='******'/>
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <div className="control">
                                        {/*16 tambah type ="submit"*/}
                                        <button type="submit" className="button is-success is-fullwidth">
                                            {isLoading ? "Loading..." : "Login"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;