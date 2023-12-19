import Add from '../components/Add';
import { Link } from 'react-router-dom';
import View from '../components/View';
import Category from '../components/Category';
import { useState } from 'react';

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
    return (
        <div >
            <div className='container d-flex justify-content-between align-items-center my-5'>
                <div className='add-videos'>
                    <Add setUploadVideoStatus={setUploadVideoStatus}/>
                </div>
                <div>
                    <Link to={'/history'} style={{ textDecoration: "none", color: "white", fontSize: "25px" }}>
                        Watch History
                    </Link>
                </div>
            </div>
            <div className='container d-flex justify-content-between align-items-center my-5'>
                
                <div className='mt-5'>
                    <Category/>
                </div>
            </div>
            <div className='container mb-5 '>


            <h4>All Videos</h4>
            <View uploadVideoStatus={uploadVideoStatus}/>
            </div>
        </div >
    )
}
export default Home;
