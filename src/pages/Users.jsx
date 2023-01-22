import React, {useEffect} from "react";
import Layout from "./Layout";
import Userlist from "../components/Userlist";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";


const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, user} = useSelector((state) => state.auth);

    //3
    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    //4
    useEffect(() => {
        if(isError){
            navigate("/");
        }
        //falidasi
        if(user && user.role !== "admin") {
            navigate("/dashboard");
        }
    },[isError,user, navigate]);
    return (
        <Layout>
            <Userlist/>
        </Layout>
    );
};

export default Users;