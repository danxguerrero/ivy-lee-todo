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
                            {
                                tasks.map((task) => {
                                    return <Task task={task} key={task.id}/>
                                })
                            }
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}