import React,{useState} from 'react'
import axios from 'axios';

function Register() {

    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [user , setUser] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('https://martacart-backend.herokuapp.com/api/register', { first_name:fname , last_name:lname, user_name:user, password })
        .then(info => {

            if(info.data.msg==="TRUE")
            {
                window.location.href="/"                
                sessionStorage.setItem('logout',true);
            }
            else
            {
                window.alert(info.data.msg);
            }

        })
        .catch(err => console.log(err));        
    }

    return (
        <>
        <div className="row mt-5">
            <div className="offset-md-4 col-md-4">
            <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="mb-3">First Name</label>
                            <input type="text" className="form-control mb-3"  aria-describedby="emailHelp"
                            value={fname} onChange={(e)=>setFname(e.target.value)} placeholder="Enter Your First Name" required autoFocus="ON" />
                        </div>
                        <div className="form-group">
                            <label className="mb-3">Last Name</label>
                            <input type="text" className="form-control mb-3"  aria-describedby="emailHelp"
                            value={lname} onChange={(e)=>setLname(e.target.value)} placeholder="Enter Your Last Name" required />
                        </div>
                        <div className="form-group">
                            <label className="mb-3">User Name</label>
                            <input type="text" className="form-control mb-3"  aria-describedby="emailHelp"
                            value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Enter Your Unique User Name" required />
                        </div>
                        <div className="form-group">
                            <label className="mb-3">Password</label>
                            <input type="password" className="form-control mb-3"  name='password' 
                            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
                        </div>
                            <button type="submit" className="btn btn-primary mb-3">Register</button><br/>
                    </form>
            </div>
        </div>
        </>
    )
}

export default Register
