import {React} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  
import { useState } from 'react';
import Projects from './Projects'
const Card = () =>{
    const location = useLocation();
    const navigate = useNavigate(); 
    function goBack(){
        navigate('/',) 
    }
    const { vals,edu,prName: initialPrName} = location.state || {};
    const [prName, setPrName] = useState(initialPrName || []);

    // Function to delete a project
    // const deleteProject = (indexToDelete) => {
    //     setPrName(prevPrName => prevPrName.filter((_, index) => index !== indexToDelete));
    // };
    // const { edu } = location.state || {};
    const deg = edu ? (edu.map((item,index)=>(
    

    <div key={index}>
        <h2 >{item.degree}</h2>
    <p>{item.collg}  </p>
    </div>
   
   ))
) : (
    <p>No degrees available</p>
);
   
    const prs = prName ? (prName.map((item,index)=>(
       
                   <Projects 
                   key={index}
                   index={index}
                   item={item}
                //    deleteProject={() => deleteProject(index)} // Pass the delete function
    />

       
 
    

))
) : (
    <p>No Project available</p>
);
    return(
        <>
        <div className='header-div'>
           <h1 className='head'>
            I am {vals?.name},</h1>   
            <div className="container">
            <div className="typeWrite"><h1>Designer</h1></div>
         
             </div>  

            {/* <button onClick={goBack}>GO BACK</button> */}
        </div>
        <div className="card-div">
        <div className="card">  
        <div className="pic">
                        
                        </div>
                <div className="infomation">
                
                    <div className="name">
                    <p><strong>Name: </strong>{vals?.name}</p>
                    <p><strong>My email is: </strong>{vals?.email}</p>
                    <p><strong>Contact: </strong>{vals?.number}</p>

                    </div>
              

                </div>
                <div className='aboutMe'>
                    <h2>About Me</h2>
                    <h3>{vals?.text}</h3>
                </div>
            </div> 
        </div>
        
        <div className="card-div">
        <div className='card'>
        <h2>Degrees:</h2>
            {deg}
        </div>
        </div>
      
        
       
       

           
            <br />
            <br />
        <div className='prjh2-div'>
        <h2 className='prjh2'>Projects:</h2>
        </div>
        
        <div className='prj-div'>
        {prs}
        </div>

           
   
   
  
 
        </>
    )
}
export default Card;