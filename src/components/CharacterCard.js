import React from "react";

import {Card, CardImg, CardTitle, CardBody, CardSubtitle} from 'reactstrap';

export default function CharacterCard(props) {
  return(
    <div>
    <Card key={props.key}>
      <CardImg src={props.image}/>
      <CardBody>
        <CardTitle> {props.name} </CardTitle>
        <CardSubtitle>  {props.species} </CardSubtitle>
      </CardBody>
    </Card>
    </div>

  );
}
