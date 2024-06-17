import {Task} from "../task/Task"
import "./taskList.css";

import { Card, Container, Col, Row } from "react-bootstrap";



export const TaskList = ({
    tasks,
    setAreTasksVisible
}) => {

    return (
        <div style={{ height:'80vh' }}>
            <Card style={{ width: '900px', height: '100%'}}>
                <Card.Body>
                    <Card.Title>Tasks</Card.Title>
                    <Container className='task-container'>
                        <Row>
                            <Col>
                                <Card style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                                    <Card.Title>Ready</Card.Title>
                                
                            {
                                tasks.map((task) => {
                                    return <Task task={task} key={task.id}/>
                                })
                            }
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: '30%', display: 'flex', alignItems: 'center'}}>
                                    <Card.Title>In Progress</Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: '70vh', display: 'flex', alignItems: 'center'}}>
                                    <Card.Title>Completed</Card.Title>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}