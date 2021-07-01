import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap'

const WorkoutEdit = (props) => {
    const [editDesc, setEditDesc] = useState(props.workoutToUpdate.exercise)
    const [editDef, setEditDef] = useState(props.workoutToUpdate.duration)
    const [editRes, setEditRes] = useState(props.workoutToUpdate.caloriesBurned)

    const workoutUpdate = (event, workout) => {
        event.preventDefault()
        fetch(`http://localhost:3000/log/${props.workoutToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({exercise: editDesc, duration: editDef, caloriesBurned: editRes})
        })
    }

    return(
        <>
        This is Workout Edit
       

        <Modal isOpen={true}>
            <ModalHeader>Log a Workout</ModalHeader>
            <ModalBody>
                <Form onSubmit={workoutUpdate}>
                    
                    <FormGroup>
                        <Label htmlFor="description">Edit Exercise:</Label>
                        <Input name="duration" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="definition">Edit Duration:</Label>
                        <Input name="caloriesBurned" value={editDef} onChange={(e) => setEditDef(e.target.value)}>
                            <option></option>
                            <option value="Duration">Duration</option>
                            <option value="Exercise">Exercise</option>
                            <option value="Calories">Calories</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="result">Edit Calories Burned:</Label>
                        <Input name="exercise" value={editRes} onChange={(e) => setEditRes(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Update the workout!</Button>
                </Form>
            </ModalBody>
        </Modal> 
        
        </>
    )
}

export default WorkoutEdit

