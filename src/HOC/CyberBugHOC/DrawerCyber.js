import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_DRAWER, OPEN_DRAWER } from '../../redux/contants/CyberBug';

export default function DrawerCyber() {
    // const [visible, setVisible] = useState(false);
    // const showDrawer = () => {
    //     setVisible(true);
    // };
    // const onClose = () => {
    //     setVisible(false);
    // };


    const { visible, ComponentContent, callBackSubmit } = useSelector(state => state.DrawerReducer);
    const dispatch = useDispatch();
    const showDrawer = () => {
        dispatch({
            type: OPEN_DRAWER,
            visible: true
        })
    }
    const closeDrawer = () => {
        dispatch({
            type: CLOSE_DRAWER,
            visible: false
        })
    }
    return (
        <div>  <>

            <Drawer visible={visible} title="Basic Drawer" placement="right" >
                {ComponentContent}
                <div className=''>
                    <Button className='mr-3' onClick={closeDrawer} type="danger">
                        Cancel
                    </Button>
                    <button type="submit">
                        Submit
                    </button>
                </div>



            </Drawer>
        </></div>
    )
}
