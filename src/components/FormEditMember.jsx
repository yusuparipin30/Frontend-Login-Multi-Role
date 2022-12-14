import React from 'react';


const FormEditMember = () => {
    return (
        <div>
              <h1 className='title'>Member</h1>
            <h2 className='subtitle'>Edit Member</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                    <form>
                    <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder='Member Name'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Address</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder='Addres'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Marital_sts</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder='Marital Status'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Category People</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder='Category People'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Active State</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder='Active State'/>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <button className="button is-success">Update</button>
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