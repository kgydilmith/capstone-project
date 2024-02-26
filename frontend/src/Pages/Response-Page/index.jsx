import React from 'react';
import Sidebar from '../../Components/SideBar';
import Navbar from '../../Components/NavBar';
import Tabs from '../../Components/TabSection';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Response = () => {

    const navigate = useNavigate();

    const collection_overview = () => {
        navigate('/collection_overview');
    }

    const request = () => {
        navigate('/request');
    }

    const response = () => {
        navigate('/response');
    }

  return (
    <div className='container'>

        <div className='sidebar3'>
            <Sidebar />
        </div>

        <div className='navbarSide'>

            <div className='navbar3'>
                <Navbar />
            </div>
            
            <div className='tabSection'>
                <Tabs />
            </div>

            <div className='myWork'>
                <span>MyWork</span>
            </div>

            <hr className='hr1' />

            <div className='overviewSection'>

                <div className='collectionOverview'>
                    <button onClick={collection_overview}><span>Collection Overview</span></button>
                </div>

                <div className='collectionOverview'>
                    <button onClick={request}><span>Request</span></button>
                </div>

                <div className='collectionOverview'>
                    <button onClick={response}><span>Response</span></button>
                </div>

            </div>

            <div className='collectionBox2'>
                <div className='box'>

                    <div className='inputBox'>
                        <input type='text' placeholder='Response Object' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Response Headers' />
                    </div>

                    <div className='inputBox'>
                        <input type='text' placeholder='Response Status' />
                    </div>

                    <div className='btn'>
                        <button>Invite</button>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Response;