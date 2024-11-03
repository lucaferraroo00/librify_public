import React from 'react'; 
import { GiBlackBook } from "react-icons/gi";  
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar } from 'react-bootstrap';


function MyNavbar(props) {    
    return (     
        <div id="navbar">       
            <Navbar bg="primary" className="justify-content-center">         
                <GiBlackBook style={{ fontSize: '2.5rem' }} /> {/* Adjust font size as needed */}
                <h1 className="ml-2 text-white">Librify</h1> {/* Add margin-left and change text color */}
            </Navbar>     
        </div >   
    );  
}  

export { MyNavbar };
