import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { HeaderAll } from './Header';
import { setUserData } from '../../redux/authReducer';

export function HeaderAPIContainer (props) {
    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then((response)=>{
            if (response.data.resultCode === 0) {props.setUserData(response.data.data)}
            
        })
    })
    return (
        <HeaderAll {...props} />
    );
}

let mapStateToProps = (state)=> {
    return {
        data: state.auth.data,
    }
}

export let HeaderContainer = connect(mapStateToProps, {
    setUserData,
}) (HeaderAPIContainer)