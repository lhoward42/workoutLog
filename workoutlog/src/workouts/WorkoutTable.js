import React from 'react'
import {Table, Button} from 'reactstrap'

const WorkoutTable = (props) => {

    const deleteWorkout = (workout) => {
        fetch(`http://localhost:3000/log/${workout.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchWorkouts())
        .catch(err => console.log(err))
    }

    const workoutMapper = () => {
        return props.workouts.map((workout, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{workout.id}</th>
                    <td>{workout.exercise}</td>
                    <td>{workout.duration}</td>
                    <td>{workout.caloriesBurned}</td>
                    <td>
                        <Button color="warning" onClick= {() => {props.editUpdateWorkout(workout); props.updateOn()}}>Update</Button> 
                        <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Workout History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Duration</th>
                    <th>Calories Burned</th>
                </tr>
            </thead>
            {workoutMapper()}
        </Table>
        </>
    )
}

export default WorkoutTable 