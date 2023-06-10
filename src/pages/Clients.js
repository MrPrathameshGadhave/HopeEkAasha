import { Tabs, Tab } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



function Clients(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.isLogin == false) {
            navigate('/admin', { replace: true });
        }
    }, [props.isLogin]);

    return(
        <h1>Clients page</h1>
    )
    
    }
    
    export default Clients;