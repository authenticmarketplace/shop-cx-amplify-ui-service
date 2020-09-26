import React from 'react';
import HeaderMenu from './HeaderMenu/index.js';
import DesktopSidebar from './_components/DesktopSidebar.js';

const Playground = () => {
    return (
        <React.Fragment>
            <DesktopSidebar />
            <HeaderMenu/>
        </React.Fragment>
    )
}

export default Playground;