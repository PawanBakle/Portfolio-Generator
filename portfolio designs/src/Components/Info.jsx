import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';  
// import { useHistory } from 'react-router-dom';
const Info =()=>{
    // const history = useHistory();
    
    const [vals , obj] = useState({
        name:'',
        email :'',
       
        text:'',
        number:''
    })
    function collectData(event){
        const {name,value} = event.target;
        obj(prevData =>( {
           
            ...prevData,
            [name] : value
        
    }))}
    const [edu , eduObj] = useState([{
        degree:'',
        dateFrom :'',
        dateTo :'',
       
        collg:''
    }])
    

    function resumeData(index,event){
        const {name,value} = event.target;
     
           
            // ...prevData,
            // [name] : value
        const updatedEducationList = [...edu];
        updatedEducationList[index][name] = value;  // Update specific education entry
            
        eduObj(updatedEducationList)
        
    
    }
    function addEducation(){
        eduObj([...edu,{        
            degree:'',
            dateFrom :'',
            dateTo :'',
           
            collg:''}])
    }

    // function showEdu(event){
    //     event.preventDefault()
    //     console.log(edu)
    // }
    const [prName,updt] = useState([])
    function handPrj(index,event){
        const {name,value } = event.target;
        const prArray = [...prName];
        prArray[index][name] = value;
        updt(prArray)
    }
 
    const projects = prName.map((project,index)=>
    <div key={index}>
            <label>Project:</label>
            <input
                type="text"
                name="projectName"
                value={project.projectName}
                placeholder="Enter Project"
                onChange={(event)=>handPrj(index,event)}
            />
            <label>Description:</label>
            <input
                type="text"
                name="desc"
                value={project.desc}
                placeholder="Enter description"
                onChange={(event)=>handPrj(index,event)}
                // Additional logic for handling input changes
            />
    </div>
    ) 
    function addProject(){
        updt(prevState => {
            return [...prevState, { projectName: '', desc: '' }];
        })
    }





    const navigate  = useNavigate();
    
    function showData(event){
        event.preventDefault()
        console.log(edu)
        console.log(vals)
        console.log(prName)
        
        if (!vals.name || !vals.email  || !vals.number || !vals.text){
            alert("Give info Bruh");
            return;
            
        }
        navigate('/success', { state:{ vals,edu,prName}});
        // history.push('/success', {  edu });
        obj({
            name:'',
            email :'',
           
            text:'',
            number:'',

        })
    }


    return (
        <>  

            <div >
            <form className="form-container" onSubmit={showData}>
            <label >Name :
                <input type="text" 
                name="name" 
                className="form--input"
        onChange={collectData}
        value={vals.name}
        >
            
            </input></label>
             <label >Email :<input 
             type="email" 
             name="email" 
             className="form--input"
             id="" 
             value={vals.email}
             onChange={collectData}></input></label>
             {/* <label > Date OF Birth<input type="date" name="" id="" ></input></label> */}
             <label > About Me<textarea 
             type = 'textarea'
             name = 'text'
             className="form--input"
             value ={vals.text}
             onChange={collectData}
              ></textarea></label>
         <label > Phone No:<input 
             type="number" 
             name="number" 
             id=""
             className="form--input"
             value = {vals.phone}
             onChange={collectData} ></input></label> 





        <button className="form--submit " type="submit">Submit </button>

            </form>



        {/* Form for Education In RESUME */}
   
        <form className="form-container" onSubmit={showData}>
        {edu.map((education, index) => (
                <div key={index}>
                    <h3>{index + 1}</h3>
            <label >Degree :
                <input type="text" 
                name="degree" 
                className="form--input"
                value={education.degree}
                onChange={(event) => resumeData(index, event)}
                
        ></input></label>
            <label >From :
                <input type="text" 
                name="dateFrom" 
                className="form--input"
                value={education.dateFrom}
                onChange={(event) => resumeData(index, event)}
                
        >
            
            </input></label>
            <label >From :
                <input type="text" 
                name="dateTo" 
                className="form--input"
                value={education.dateTo}
                onChange={(event) => resumeData(index, event)}
                
        >
            
            </input></label>
            <label >College :
                <input type="text" 
                name="collg" 
                className="form--input"
                value={education.collg}
                onChange={(event) => resumeData(index, event)}
                
        ></input></label>
            <button type="button" onClick={addEducation}>Add new Degree</button>
            </div>
        ))}
            </form>


            </div>
        

        {/* Form To Collect PROJECTS INFO */}
        <button onClick={addProject}>Add Project</button>
        {projects}

        <form className="form-container" onSubmit={showData}>
        
        {}



       


        </form>





        
        </>
        
    )
}
export default Info
