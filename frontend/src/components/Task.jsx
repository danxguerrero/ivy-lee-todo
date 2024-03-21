import { Card } from 'react-bootstrap';


export const Task = ({task}) => {

    
    return (
        <Card>
            <Card.Title>{task.title}</Card.Title>
            <Card.Body>This is a body.</Card.Body>
        </Card>
    )
}