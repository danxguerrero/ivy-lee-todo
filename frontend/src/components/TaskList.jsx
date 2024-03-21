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
                                <Card>
                                    <Card.Title>Ready</Card.Title>
                                </Card>
                            {
                                tasks.map((task) => {
                                    return <Task task={task} key={task.id}/>
                                })
                            }
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Title>In Progress</Card.Title>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
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