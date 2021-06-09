import React, { useRef, useEffect } from 'react';
import { mount as dashboardMount } from 'dashboard/DashboardApp';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        dashboardMount(ref.current);
    }, []);

    return <div ref={ref} />
};