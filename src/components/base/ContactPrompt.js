import React, { useContext } from "react";
import styled from "styled-components";

import UXContext from "utils/UXContext";
import MagicLink from "components/base/MagicLink";

const Text = styled.p`
  text-align: justify;
`;
const Title = styled.h3``;
const StyledLink = styled.button`
  display: inline;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`;
export default function ContactPrompt(props) {
  const { setEmbedOpen } = useContext(UXContext);

  return (
    <>
      {!props.configurator && !props.contact && (
        <>
          <Title>
            Comment intégrer ces données à mon site ou application ?
          </Title>
          <Text>
            <strong>
              Vous souhaitez afficher cette page web sur votre site ?
            </strong>
            <br />
            Personnalisez-le et intégrez-le facilement grâce à{" "}
            <StyledLink
              onClick={() => {
                setEmbedOpen(true);
              }}
            >
              notre configurateur
            </StyledLink>
            .
          </Text>
        </>
      )}
      <Text>
        <strong>
          Cette page web a été modifiée pour s'adapter au territoire du Pays du
          Calaisis.
        </strong>
        <br />
      </Text>
      {!props.contact && (
        <Text>
          <strong>
            Vous souhaitez réutiliser le code de la page web originale ?
          </strong>
          <br />
          Cette page web est développé de manière ouverte (open source).
          L’ensemble du code est{" "}
          <MagicLink to="https://github.com/datagir/mesfruitsetlegumesdesaison">
            disponible librement
          </MagicLink>
          .
        </Text>
      )}
    </>
  );
}
