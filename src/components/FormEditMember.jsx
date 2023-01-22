import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const FormEditMember = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [marital_sts, setMarital_sts] = useState("");
    const [category_people, setCategory_people] = useState("");
    const [active_state, setActive_state] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getMemberById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/members/${id}`);
                setName(response.data.name);
                setAddress(response.data.address);
                setGender(response.data.gender);
                setMarital_sts(response.data.marital_sts);
                setCategory_people(response.data.category_people);
                setActive_state(response.data.active_state);
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        getMemberById();
    },[id]);

    const updateMember = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/members/${id}`,{
                name: name,
                address: address,
                gender: gender,
                marital_sts: marital_sts,
                category_people: category_people,
                active_state: active_state
            });
            navigate("/members");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    return (
        <div>
              <h1 className='title'>Member</h1>
            <h2 className='subtitle'>Edit Member</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                    <form onSubmit={updateMember}>
                        <p className="has-text-centered">{msg}</p>
                    <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Member Name'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Address</label>
                                    <div className="control">
                                        <input type="text" className="input" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Addres'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Gender</label>
                                    <div className="control">
                                        <input type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} placeholder='Gender'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Marital_sts</label>
                                    <div className="control">
                                        <input type="text" className="input" value={marital_sts} onChange={(e) => setMarital_sts(e.target.value)} placeholder='Marital Status'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Category People</label>
                                    <div className="control">
                                        <input type="text" className="input" value={category_people} onChange={(e) => setCategory_people(e.target.value)} placeholder='Category People'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Active State</label>
                                    <div className="control">
                                        <input type="text" className="input" value={active_state} onChange={(e) => setActive_state(e.target.value)} placeholder='Active State'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <button type="submit" className="button is-success">Update</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormEditMember;