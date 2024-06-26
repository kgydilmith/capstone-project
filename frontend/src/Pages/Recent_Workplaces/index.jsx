import React from 'react';
import './index.css';
import Logo from '../../Assets/logo1.png';
import Pluse from '../../Assets/plusmath.png';
import User from '../../Assets/user.png';
import Trash from '../../Assets/fullTrash.png';
import Next from '../../Assets/nextpage.png';
import Navbar from '../../Components/NavBar';
import { useNavigate } from 'react-router-dom';

const Recent_Workplaces = () => {

    const navigate = useNavigate();

    const my_work = () => {
        navigate('/my_work');
    }

    return (
    <div className='container1'>
        <div className='sidebar1'>
            <div className='top_section1'>

                <div className='logo1'>
                    <img src={Logo} alt='' />
                </div>

                <div className='title1'>
                    <h3>IntegraAllay</h3>
                </div>
                
            </div>

            <div className='addImage'>
                <div className='image'>
                    <a href='#'>
                        <img src={Pluse} alt='' />
                        <span>Add Image</span>
                    </a>
                </div>
            </div>
            
            <div className='functionSection'>

                <hr className='hr2' />       

                <div className='function'>
                    <img src={Pluse} alt='' />
                    <span>Functions</span>
                </div>

                <div className='function'>
                    <img src={Pluse} alt='' />
                    <span>Functions</span>
                </div>

                <div className='function'>
                    <img src={Pluse} alt='' />
                    <span>Functions</span>
                </div>

                <div className='function'>
                    <img src={Pluse} alt='' />
                    <span>Functions</span>
                </div>

            </div>
 
            <div className='userSection1'>
                <div className='user'>
                    <div className='userImage'>
                        <img src={User} alt='' />
                    </div>

                    <div className='userName'>
                        <h3>Hashara Nethmi</h3>
                        <span>hasharanethmi2020@gmail.com</span>
                    </div>
                </div>
            </div> 

        </div>

        <div className='navbarSide'>
            
            <Navbar />

            <div className='recentSection'>
                <div className='recentTitle'>
                    <span>Recently Visited Workspaces</span>
                </div>

                <div className='recentWork'>
                    <div className='recent'>
                        <div className='work'>
                            <div className='work-text'>
                                <input type='text' placeholder='MyWork'  />
                            </div>
                            <div className='work-img'>
                                <img src={Next} alt='' onClick={my_work}/>
                            </div>
                        </div>

                        <div className='delete'>
                            <img src={Trash} alt='' />
                        </div>
                    </div>

                    <div className='recent'>
                        <div className='work'>
                            <div className='work-text'>
                                <input type='text' placeholder='NewWorkSpace'  />
                            </div>
                            <div className='work-img'>
                                <img src={Next} alt='' onClick={my_work}/>
                            </div>
                        </div>

                        <div className='delete'>
                            <img src={Trash} alt='' />
                        </div>
                    </div>

                    <div className='recent'>
                        <div className='work'>
                            <div className='work-text'>
                                <input type='text' placeholder='NewWorkSpace2'  />
                            </div>
                            <div className='work-img'>
                                <img src={Next} alt='' onClick={my_work}/>
                            </div>
                        </div>

                        <div className='delete'>
                            <img src={Trash} alt='' />
                        </div>
                    </div>
                </div>

                <div className='createSection'>
                    <div className='createTitle'>
                        <span>Create New Workspace</span>
                    </div>

                    <div className='createImg'>
                        <img src={Pluse} alt='' onClick={my_work} />
                    </div>
                </div>

            </div>

        </div>
    

        
  </div>
  )
}

export default Recent_Workplaces;