import Accordion from 'react-bootstrap/Accordion';
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";

export const Task = ({task}) => {

    
    return (
        <Accordion.Item eventKey={task.id}>
            <Accordion.Header>{task.title}</Accordion.Header>
            <Accordion.Body>This is a body</Accordion.Body>
        </Accordion.Item>
    )
}