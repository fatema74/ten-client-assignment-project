
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const User = () => {


  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id => {
    fetch(
      `https://ten-assignment-project-61qhs5ztk-kanis-fatemas-projects.vercel.app/${id}`,
      {
        method: 'DELETE',
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log('deleted successfuly');

          const remainingUsers = users.filter(user => user._id !== id);
          setUsers(remainingUsers);
        }
      });
  }

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10">
        Users: {loadedUsers.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Created At</th>
              <th>Last LogIn</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map(user => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  {
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="font-bold btn"
                    >
                      X
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;