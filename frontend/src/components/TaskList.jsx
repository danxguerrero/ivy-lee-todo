import {Task} from "./Task"

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"


export const TaskList = ({
    tasks,
    setAreTasksVisible
}) => {

    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card className='p-4' style={{ width: '800px', height: '1000px'}}>
                <Card.Body>
                    <Card.Title>Tasks</Card.Title>
                    <ListGroup>
                        {
                            tasks.map((task) => {
                                return <Task task={task} key={task.id}/>
                            })
                        }
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}