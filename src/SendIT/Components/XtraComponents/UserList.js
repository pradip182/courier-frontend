import React from 'react';
import { connect } from 'react-redux';

import ListItem from './UserListItem';

const UserList = ({ userListData }) => (
  <div>
    {userListData.map(user => {
      return (
        <ListItem
          key={user.userid}
          userid={user.userid}
          name={user.name}
          address={user.address}
          sent={user.sent}
          email={user.email}
          status={user.status}
        />
      );
    })}
  </div>
);

function mapStateToProps(state){
  return {
    userListData: state.userList
  }
}

export default connect(mapStateToProps, null)(UserList)