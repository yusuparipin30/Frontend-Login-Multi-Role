import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const FormAddMember = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [marital_sts, setMarital_sts] = useState("");
    const [category_people, setCategory_people] = useState("");
    const [active_state, setActive_state] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveMember = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/members',{
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
            <h2 className='subtitle'>Add New Member</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                    <form onSubmit={saveMember}>
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
                                        <button type="submit" className="button is-success">Save</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddMember