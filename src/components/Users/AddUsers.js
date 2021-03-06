import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = (props) => {
    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUser.trim().length === 0 || enteredAge.trim().length === 0){
            return;
            // return finishes the function execution 
        }
        if(+enteredAge < 1){
            return;
        }
        console.log(enteredUser, enteredAge);
        setEnteredUser('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input 
                id="username" 
                type="text" 
                onChange={userNameChangeHandler}

            />
            <label htmlFor="age">Age (Years)</label>
            <input 
                id="age" 
                type="number" 
                onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
};


export default AddUser;
