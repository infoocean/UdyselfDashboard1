import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

function Notification(){
    return<>
        <div className=""> 
            <div className="Notification pt-3">
                <p> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing.</p>
                <p> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing.</p>
                <p> <FontAwesomeIcon icon={faCommentAlt}/> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing 
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
                consectetur  dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>  
    </>
}
export default Notification;