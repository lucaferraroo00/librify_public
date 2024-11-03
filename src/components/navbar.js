import React from 'react'; 
import { GiBlackBook } from "react-icons/gi";  
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function MyNavbar(props) {    
    return (     
        <div id="navbar">       
            <Navbar bg="primary" className="d-flex justify-content-between align-items-center fixed-top">    
                <Button variant="light" className="ml-2">Light</Button>
                <div className="mx-auto text-center"> {/* Center the logo */}
                    <GiBlackBook style={{ fontSize: '2.5rem' }} /> {/* Adjust font size as needed */}
                    <h1 className="d-inline ml-2 text-white">Librify</h1> {/* Add margin-left and change text color */}
                </div>
            </Navbar>     
        </div>   
    );  
}  

export { MyNavbar };
