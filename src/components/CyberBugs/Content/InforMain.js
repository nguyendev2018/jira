import React from 'react'

export default function InforMain() {
    return (
        <div className="info" style={{ display: 'flex' }}>
            <div className="search-block">
                <input className="search" />
                <i className="fa fa-search" />
            </div>
            <div className="avatar-group" style={{ display: 'flex' }}>
                <div className="avatar">
                    <img src={require('../../../assets/dog.jfif')} alt />
                </div>
                <div className="avatar">
                    <img src={require('../../../assets/cat.jfif')} alt />
                </div>
                <div className="avatar">
                    <img src={require('../../../assets/candy.jfif')} alt />
                </div>
            </div>
            <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
            <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
        </div>

    )
}
