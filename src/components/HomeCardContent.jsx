import React from "react";


function HomeCardContent(){
    
    return (<div id='extra-box-1'>
        <div className='box-1-card row' >
            <div className='col-xl-6'>
            
                <h3 id='h3-card-content'>Comprehensive and Engaging Content</h3>
                <p id='p-card-content'>We curate a vast array of trivia challenges and educational content across various subjects and interests. From academic topics to practical skills to enriching general knowledge, our diverse collection caters to users of all ages and backgrounds.</p>

            </div>
            <div className='col-xl-6'>
                <img id='image-content' src='https://images.unsplash.com/photo-1608447714925-599deeb5a682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80' alt="geometry" />
            </div>

        </div>
    </div>
    
    )
}

export default HomeCardContent;