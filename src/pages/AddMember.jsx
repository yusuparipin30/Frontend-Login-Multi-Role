import React, {useEffect} from 'react';
import Layout from './Layout';
import FormAddMember from '../components/FormAddMember';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";



const AddMember = () => {
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
            < FormAddMember/>
        </Layout>
    );
};

export default AddMember;