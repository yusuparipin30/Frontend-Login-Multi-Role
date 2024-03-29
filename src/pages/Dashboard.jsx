import React, {useEffect} from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
//1.memprotect
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
    //2
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
            <Welcome/>
        </Layout>
    );
};

export default Dashboard;