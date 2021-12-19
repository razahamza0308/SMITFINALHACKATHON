   
import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = ({ value, onClick }) => {
    return (
        <div className="buttonQuiz">
            <div className="d-grid gap-2">
                <Button variant="outline-success" onClick={(e)=>{onClick(e)}} size="lg">
                    {value}
                </Button>
                
            </div>
        </div>
    )
}

export default Buttons;