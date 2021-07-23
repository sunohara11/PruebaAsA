import React from 'react';

import powerembed from './powerembed.css'

const Powerembed = () => {
    
    return (
        <>
            <div className="embed">
                <iframe width="600" height="373.5"
                src="https://app.powerbi.com/view?r=eyJrIjoiMWYwMTIyN2UtMWM2Ni00N2JiLTkzNzEtZWE1OWViODllYjY1IiwidCI6IjdiZDI5MmI5LWQ3MmQtNDdiOS05NTYwLTIxYTg2ZjhmNWJjMCJ9" 
                frameborder="0" allowFullScreen="true"
                className= "embed">
                
                </iframe>
            </div>
        </>
    );
}

export default Powerembed