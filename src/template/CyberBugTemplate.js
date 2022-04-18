import React from 'react'
import { Route } from 'react-router-dom';
import ContentMain from '../components/CyberBugs/Content/ContentMain';
import HeaderMain from '../components/CyberBugs/Content/HeaderMain';
import InforMain from '../components/CyberBugs/Content/InforMain';
import MenuCyberBug from '../components/CyberBugs/MenuCyberBug';
import Modal from '../components/CyberBugs/Modal/Modal';
import SlidebarCyberBug from '../components/CyberBugs/SlidebarCyberBug';
import '../index.css'
export const CyberBugTemplate = (props) => {
    const { Component, ...restParams } = props;

    return <Route {...restParams} render={(propsRoute) => {
        return <>
            <div className="jira">
                <SlidebarCyberBug />
                <MenuCyberBug />
                <Component {...propsRoute} />
                <Modal />
            </div>

        </>
    }}
    />
}
