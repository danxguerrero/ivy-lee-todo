import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"


export const TaskList = ({
    tasks,
    setAreTasksVisible
}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card className='p-4' style={{ width: '600px'}}>
                <Card.Body>
                    <Card.Title>Tasks</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>Task 1</ListGroup.Item>
                        <ListGroup.Item>Task 2</ListGroup.Item>
                        <ListGroup.Item>Task 3</ListGroup.Item>
                        <ListGroup.Item>Task 4</ListGroup.Item>
                        <ListGroup.Item>Task 5</ListGroup.Item>
                        <ListGroup.Item>Task 6</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}