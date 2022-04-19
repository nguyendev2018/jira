
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { withFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { action_signIn } from '../../redux/actions/CyberBugSagaAction';
function Login(props) {
    const {
        values,
        handleSubmit, handleChange, errors
    } = props
    return (
        <form onSubmit={handleSubmit} className='container' style={{ height: window.innerHeight }}>
            <div className='' style={{ height: window.innerHeight }}>
                <h3 className='text-center'>Login</h3>
                <div className='d-flex mt-3'>
                    <Input style={{ width: "100%" }} onChange={handleChange} name='email' size='large' placeholder='email' prefix={< UserOutlined />} />
                </div>
                <p style={{ color: "red", textAlign: "left" }}>{errors.email}</p>
                <div className='d-flex mt-3'>
                    <Input style={{ width: "100%" }} onChange={handleChange} type='password' name='password' size='large' placeholder='paswword' prefix={< LockOutlined />} />
                </div>
                <p>{errors.password}</p>
                <Button htmlType="submit" className='mt-3' size='large' >Login</Button>
            </div>

        </form>
    )

}
const LoginWithFormik = withFormik({
    mapPropsToValues: () => ({

        email: "",
        password: "",

    }),
    validationSchema: Yup.object({

        email: Yup.string()
            .email("Invalid email format")
            .required("Required!"),
        password: Yup.string()
            .min(4, "Minimum 4 characters")
            .required("Required!"),

    }),
    handleSubmit: (value, { props }) => {
        console.log(props);
        props.dispatch(action_signIn(value, props.history))
    }
})(Login);
export default connect()(LoginWithFormik)
// cyberlearn@gmail.com
//123456