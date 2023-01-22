import React, {useEffect} from "react";
import Layout from "./Layout";
import MemberList from "../components/MemberList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";


const Member = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state) => state.auth);

    //3
    useEffect(() => {
        dispatch(getMe());
    },[dispatch]);

    //4
    useEffect(() => {
        if(isError){
            navigate("/");
        }
    },[isError, navigate]);
    return (
        <Layout>
            <MemberList/>
        </Layout>
    );
};

export default Member;