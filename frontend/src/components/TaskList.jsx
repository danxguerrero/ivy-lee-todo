import {Task} from "./Task"

import { Card, Container, Col, Row } from "react-bootstrap";



export const TaskList = ({
    tasks,
    setAreTasksVisible
}) => {

    return (

        <div>
            <Card className='p-4' style={{ width: '900px', height: '1100px'}}>
                <Card.Body>
                    <Card.Title>Tasks</Card.Title>
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{height: '1000px', display: 'flex', alignItems: 'center'}}>
                                    <Card.Title>Ready</Card.Title>
                                
                            {
                                tasks.map((task) => {
                                    return <Task task={task} key={task.id}/>
                                })
                            }
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: '200px', display: 'flex', alignItems: 'center'}}>
                                    <Card.Title>In Progress</Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: '1000px', display: 'flex', alignItems: 'center'}}>
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