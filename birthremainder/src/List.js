import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) =>{
        const{ id, name, dob, age, image } = person;
        return (
            <artcile key={id} className='person'>
            <img src={image} alt={name}/>
            <div>
                <h4>{name}</h4>
                <p>{dob} </p>
                <p>{age} years</p>
            </div>
        </artcile>

        );
      })}
    </>
  );
};

export default List;