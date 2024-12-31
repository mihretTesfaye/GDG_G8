import React from 'react';

const MemberList = () => {
  const group = {
    groupName: "Group 1",
    members: ["mihret", "muni", "misgana"]
  };

  return (
    <div>
      <h3>{group.groupName}</h3>
      <ul>
        {group.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
