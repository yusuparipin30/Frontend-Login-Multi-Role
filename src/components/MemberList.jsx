import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const MemberList = () => {
    const [members, setMembers] = useState ([]);
    
    useEffect(() => {
        getMembers();
    },[]);

    const getMembers = async () => {
        const response = await axios.get('http://localhost:5000/members');
        setMembers(response.data);
    };

    const deleteMember = async (memberId) => {
        await axios.delete(`http://localhost:5000/members/${memberId}`);
        getMembers();
    };

    return (
         <div>
        <h1 className='title'>Warga</h1>
      <h2 className='subtitle'>List Of Member</h2>
      <Link to="/members/add" className="button is-primary mb-2">Add New</Link>
      <table className="table is-striped is-fullwidth">
          <thead>
              <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Marital_sts</th>
                  <th>Category_people</th>
                  <th>Active_state</th>
                  <th>Created By</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
            <tr key={member.uuid}>
                 <td>{index + 1}</td>
                 <td>{member.name}</td>
                 <td>{member.address}</td>
                 <td>{member.gender}</td>
                 <td>{member.marital_sts}</td>
                 <td>{member.category_people}</td>
                 <td>{member.active_state}</td>
                 <td>{member.user.name}</td>
                 <td>
                    <Link  to={`/members/edit/${member.uuid}`} className="button is-small is-info">Edit</Link>
                    <button onClick={() => deleteMember(member.uuid)} className="button is-small is-danger">Delete</button>
                 </td>
             </tr>
            ))}
             
          </tbody>
      </table>
  </div>
    );
};


export default MemberList;