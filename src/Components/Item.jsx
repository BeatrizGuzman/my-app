// Listas

import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
export default function Item({id,tittle,description,precio,pictureUrl}) {
    return (
    <div>
    <Card className="cardsEste" 
    style={ {flexDirection: 'column', 
    width: "35rem", 
    alignItems: "center", 
    display: 'flex', 
    margin: "auto",
    textAlign: 'center',
    }}>
        <CardBody>
            <CardTitle tag="h2">{tittle}</CardTitle>
            <CardImg src={pictureUrl}/>
            <CardText>
            <CardText>{description}</CardText>
            </CardText>
        </CardBody>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Inversión correspondiente a una entrega:<CardText>{precio}</CardText></ListGroupItem>
            <ListGroupItem>Único número de entrega:<CardText>{id}</CardText></ListGroupItem>
        </ListGroup>
        <CardBody>
        <Link className="btn btn-primary" to={'/producto/'+id}>VER</Link>
        </CardBody>
    </Card>
    </div>
    )
}
