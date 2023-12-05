import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await client.account();
      setUser(user);
    } catch (error) {
      navigate("/project/signin");
    }
  };
  const updateUser = async () => {
    const status = await client.updateUser(user._id, user);
  };
  const signout = async () => {
    const status = await client.signout();
    navigate("/project/signin");
  };
  const save = async () => {
    await client.updateUser(user);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  useEffect(() => {
    if (id) {
        findUserById(id);
      } else {  
    fetchUser();
    }
  }, []);
  return (
    <div>
      <h1>Account</h1>
      {user && (
        <div>
        <p>Username: {user.username}</p>
          <input 
            type="text"
            className="form-control"
            value={user.password}
            onChange={(e) => setUser({ ...user,
              password: e.target.value })}/>
          <input
            type="text"
            className="form-control"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <input 
            type="date"
            className="form-control"
            value={user.dob}
            onChange={(e) => setUser({ ...user,
              dob: e.target.value })}/>
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <select 
            type="text"
            className="form-control"
            onChange={(e) => setUser({ ...user,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateUser} className="btn btn-primary">
            Save
          </button>
          <button onClick={updateUser} className="btn btn-primary">
            Update
          </button>
          <button onClick={signout} className="btn btn-danger">
            Sign Out
          </button>
          {user.role === "ADMIN" && (
          <Link to="/project/admin/users" className="btn btn-warning">
            Users
          </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Account;