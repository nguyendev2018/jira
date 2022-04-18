import React, { useState, useEffect } from 'react'

import { Layout } from "antd";
import { Route } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
export const UserLoginTemplate = (props) => {
    console.log(props);
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        window.onresize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    }, [])
    let { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRouter) => {
        return <>
            <Layout >

                <Sider width={size.width / 2} style={{ marginRight: "20px", height: size.height, backgroundSize: "cover", backgroundImage: 'url(https://picsum.photos/2000)' }}>
                </Sider>
                <Content>
                    <Component {...propsRouter} />
                </Content>

            </Layout>
        </>
    }}
    />
}