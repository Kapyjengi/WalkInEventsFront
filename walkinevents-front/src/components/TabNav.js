import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const TabNav = () => {

    return (
        <Tabs defaultActiveKey="map">
            <Tab eventKey="map" title="Map">
                Map
            </Tab>
            <Tab eventKey="list" title="List">
                List
            </Tab>
        </Tabs>
    )
}

export default TabNav