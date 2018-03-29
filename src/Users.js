import React from 'react';
import { connect } from 'react-redux';

const Users = ({users})=>{
  return (
    <ul>
      {
        users.map(user => {
          return (
          <li key={user.id}>
            {user.name}
          </li>
          );
        })
      }
    </ul>
  );
};

const mapStateToProps = ({users})=> {
  return {
    users
  };
};

export default connect(mapStateToProps)(Users);
