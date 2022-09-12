import React, { useState, useRef } from 'react';
import style from './UserInput.module.css';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const UserInput = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();


//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // handleFormValidation();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorMessage({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setErrorMessage({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const newUser = {
      name: enteredName,
      age: Number(enteredAge),
    };
    props.onSaveUserData(newUser);
    // setName('');
    // setAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const handleError = () => {
    setErrorMessage(null);
  };

  return (
    <>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={handleError}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className={style['new-user__inputs']}>
          <div className={style['new-user__input']}>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              type='text'
              name='username'
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
              ref={nameInputRef}
            />
          </div>
          <div className={style['new-user__input']}>
            <label>Age (Years)</label>
            <input
              type='number'
              name='age'
            //   value={age}
            //   onChange={(e) => setAge(e.target.value)}
              ref={ageInputRef}
            />
          </div>
        </div>
        <Button type='submit'>Add User</Button>
      </form>
    </>
  );
};

export default UserInput;
