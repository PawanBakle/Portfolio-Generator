import {React} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  

const Project = (props) =>{  
    return(
<div key={props.index}>
<div>

<div className="prj">
           
        <h2>{props.item.projectName}</h2>
        <br />
        <br />
        <div>
        <i>{props.item.desc} </i>
        <button onClick={props.deleteProject}>Delete Project</button>
        </div>
    
        </div>
</div>

</div>

    ) 

}
export default Project