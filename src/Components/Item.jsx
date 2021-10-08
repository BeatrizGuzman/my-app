// Listas

import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
export default function Item({id,tittle,description,precio,pictureUrl}) {
    return (
    <div style={{ marginTop: "2rem"}}>
    <Card className="cardsEste" 
    style={ {flexDirection: 'column', 
    width: "35rem", 
    alignItems: "center", 
    display: 'flex', 
    margin: "auto",
    textAlign: 'center',
    }}>
        <CardBody>
            <CardTitle tag="h4">{tittle}</CardTitle>
            <CardImg src={pictureUrl}/>
            <CardText>{description}</CardText>
        </CardBody>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Inversión:<CardText>{precio}</CardText></ListGroupItem>
            <ListGroupItem>Único número de producto:<CardText>{id}</CardText></ListGroupItem>
        </ListGroup>
        <CardBody>
        <Link className="btn btn-outline-dark" to={'/producto/'+id}>VER</Link>
        </CardBody>
    </Card>
    </div>
    )
}
