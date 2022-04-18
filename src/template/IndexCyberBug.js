import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentMain from '../components/CyberBugs/Content/ContentMain';
import HeaderMain from '../components/CyberBugs/Content/HeaderMain';
import InforMain from '../components/CyberBugs/Content/InforMain';
import { GET_DETAIL } from '../redux/contants/CyberBug';

export default function IndexCyberBug(props) {
    const { projectDetail } = useSelector(state => state.ProjectReducer);
    console.log(projectDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        const { projectId } = props.match.params;
        dispatch({
            type: GET_DETAIL,
            projectId
        })
    }, [])

    return (
        <div className='main'>
            <HeaderMain></HeaderMain>
            <InforMain />
            <ContentMain />
        </div>
    )
}
