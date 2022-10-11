import React from "react";
import styled from "styled-components";

import Tile from "components/misc/Tile";
import Suggestions from "components/misc/Suggestions";

const Title = styled.h3`
  position: relative;
  margin-bottom: 1rem;
  font-size: 1.5em;
`;
const Text = styled.p`
  position: relative;
  margin-bottom: 2em;
`;
export default function NotFound(props) {
  return (
    <Tile>
      <Title>Désolé, nous n'avons rien trouvé.</Title>
      <Text>
        Si un fruit ou légume n'est pas répertorié, c'est qu'il n'est pas
        produit sur le Pays du Calaisis.
      </Text>
      <Suggestions length={5} iframe={props.iframe} />
    </Tile>
  );
}
