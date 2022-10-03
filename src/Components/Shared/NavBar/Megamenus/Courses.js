import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './Megamenus.scss'
import{Cat} from "./data1"
import { Popular } from "./data1";


 

const Course = () =>{
return(
    <div className="nav-megamenu course-megamenu" >
        <div className="menu-links">
            <h5><FormattedMessage id = 'Cat' defaultMessage = 'Categories' /></h5>
            <div className="inner-links"> 
                <div className="Right">
                    {Cat.map ((props)=> {
                        return(
                         <div className="Content">
                            {props.items.map((l)=>{
                                return(
                                    <Link  to={l.to}  className="dev">
                                            <div className="title" >
                                            <p>{l.title} </p>
                                            </div>
                                             <div className="icon">
                                            {l.icon}
                                            </div>
                                            </Link>
                                )
                            } 
                            )
                    }
                            </div>
                        )
                    
                    })}
                </div>


                <div className="Left">
                {Cat.map((props) => {
                    return(
                    <div className="Contents">
                            {props.item.map((a)=>{
                            
                                return(
                                    <Link  to={a.to}  className="devs">
                                            <div className="titles" >
                                            <p>{a.title} </p>
                                            </div>
                                             <div className="icons">
                                            {a.icon}
                                            </div>
                                            </Link>                     
                                )
                            }
                            )}
                        </div>
                       
                    )
                }
                )}
            </div>
            
            
           </div>



           </div>
    
           {/*<div className="mid">
                <h5><FormattedMessage id="Popular" defaultMessage='Popular Topics'/></h5>
                <div className="inside-links">
                    {Popular.map((props)=>{
                        return(
                            <Link to={props.to} className='menu-main'>
                                <div className="icon-container">
                                    <div className="icon-style" style={{content: `url(${props.icon})`}}></div>
                                    <div className="bg"  style={{border:`${props.bg}`}}></div>
                                </div>
                                <div className="block">
                                    <h4>{props.title}</h4>
                                </div>


                            </Link>
                        )
                    }
                    )}

                </div>
                
                </div>*/}
                <div className="Topics">
                <h5><FormattedMessage id="Popular" defaultMessage= "Popular Topics"/></h5>
                
              
                    {Popular.map((props) => {
                        return(
                            <Link to={props.to} className="languages-main">
                               <div className="icon-container">
                                    <div className="icon-style" style={{content:`url(${props.icon})`}}></div>
                                    <div className="bg" style={{border:`${props.bg}`}}></div>
                                </div>
                                <div className="block">
                                    <h4>{props.title}</h4>
                                </div>
                            </Link>
                        )
                    }
                    )}
             
                </div>
            
           
            
                            
                  
                  
                
     

       
       
     

            


</div>
    

)
}

export default Course