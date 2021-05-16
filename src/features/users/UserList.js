import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchUsers, userDeleted } from "./usersSlice";

export function UserList() {
  const { entities } = useSelector((state) => state.users);

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load users</button>
        </div>
        <div className="two columns">
          <button className="button-primary">Add user</button>
        </div>
      </div>
      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entities.map(({id, name, email}, i) => (              
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button>Delete</button>
                  <Link to={`/edit-user/${id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
            <tr>
              <td>1</td>
              <td>Dave Gamache</td>
              <td>dave@gmail.com</td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}