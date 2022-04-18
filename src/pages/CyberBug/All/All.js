import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover, Space, Table, Tag, AutoComplete } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FormEdit from '../../../components/Forms/FormEdit';
import { ALL, DELETE_FORM, EDIT_PROJECT, GET_USER, OPEN_DRAWER, OPEN_FORM_EDIT } from '../../../redux/contants/CyberBug';
import { connect, withFormik } from 'formik';

export default function All(props) {
    const dataAll = useSelector(state => state.ProjectReducer.arrAll);

    const userSearch = useSelector(state => state.UserReducer.userSearch);
    const data = dataAll;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: ALL
        })
    }, [])


    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });

    const handleChange = (pagination, filters, sorter) => {
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };
    const clearFilters = () => {
        setState({ filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };
    let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: "id",
            render: (text, jira) => {
                return <span key={text}>{jira.id}</span>
            }

        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, jira) => {
                return <div>
                    <NavLink to={`/detail/${jira.id}`}>
                        <span key={text}>{jira.projectName}</span>
                    </NavLink>


                </div>

            }
        },
        {
            title: 'Members',
            dataIndex: 'members',
            key: 'members',
            render: (text, jira) => {

                return <div>
                    {jira.members?.slice(0, 3).map((item, index) => {
                        return <Avatar key={index} src={item.avatar}></Avatar>
                    })}
                    {jira.members?.length > 3 ? <Avatar>...</Avatar> : ""}
                    <Popover placement='topLeft' title={"Add User"} content={() => {
                        return <AutoComplete
                            options={userSearch?.map((item, index) => {
                                return { label: item.name, value: item.userId }
                            })}
                            onSelect={(value, option) => {

                            }}
                            style={{ width: "100%" }} trigger="click" onSearch={(value) => {
                                dispatch({
                                    type: GET_USER,
                                    values: value
                                })
                            }}>
                            Who?
                        </AutoComplete>
                    }} trigger="click">
                        <Button>+</Button>
                    </Popover>
                </div>
            }

        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text, jira) => {
                return <span key={text}>{jira.description}</span>
            }
        },
        {
            title: 'Project Name',
            dataIndex: 'project Name',
            key: 'project Name',
            render: (text, jira) => {
                return <span key={text}>{jira.projectName}</span>
            },
            sorter: (item2, item1) => {
                let projectName1 = item1.projectName?.trim().toLowerCase();
                let projectName2 = item2.projectName?.trim().toLowerCase();
                if (projectName2 < projectName1) {
                    return -1
                }
                return 1
            },


        },
        {
            title: 'Creator',
            dataIndex: 'creator',
            key: 'creator',
            render: (text, jira) => {
                return <Tag color="green" key={text}>{jira.creator.name}</Tag>
            }
        },
        {

            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (text, record, jira) => {
                return <>
                    <Button onClick={() => {

                        // dispatch({
                        //     type: OPEN_DRAWER,
                        //     visible: true
                        // })
                        const action = {
                            type: OPEN_FORM_EDIT,
                            Component: <FormEdit />,

                            visible: true
                        }
                        // dispatch reducer render
                        dispatch(action);
                        //dispatch data row now reducer
                        const actionEditProject = {
                            type: EDIT_PROJECT,
                            projectEditDraw: record
                        }
                        dispatch(actionEditProject)
                    }}><EditOutlined /></Button>
                    <Button className="ml-3" key={text} onClick={() => {

                        dispatch({
                            type: DELETE_FORM,
                            deleteId: record.id
                        })
                    }}><DeleteOutlined /></Button>
                </ >
            }
        }
    ];
    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };
    return (
        <div className='container'>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </div>
    )

}
