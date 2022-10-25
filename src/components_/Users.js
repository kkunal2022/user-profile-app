import React from 'react';
import Button from './Button';
import Card from './Card';

// const Users = (props) => {
const Users = ( { name , job }) => {
  return (
    <div>
        {/* <Card> */}
        
        <div>
        {/* <div className="user"> */}
            
            {/* <h2>Name: { props.name || 'Default name' }</h2>
            <h3>Job: { props.job || 'Default job'}</h3> */}

            <h2>Name: { name }</h2>
            <h3>Job: { job }</h3>
            <Button> Learn More </Button>
        </div>

        {/* </Card> */}

    </div>
  );
};

 Users.defaultProps = {
     name: 'Default name',
     job: 'Default job',
 }

export default Users;