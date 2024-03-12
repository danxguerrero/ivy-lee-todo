import ListGroup from "react-bootstrap/esm/ListGroup";

export const Task = ({task}) => {
    
    return (
        <ListGroup.Item>{task.title}</ListGroup.Item>
    )
}