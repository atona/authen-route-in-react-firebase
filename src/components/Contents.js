import React from "react";
import styled from "styled-components";

const sizes = {
  small: "520px",
  default: "960px",
  large: "1280px"
};

const Contents = styled.div`
  & {
    width: 85%;
    height: 90%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    margin: 60px auto 0;
    padding: 3%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: ${({ theme }) => sizes[theme.size]}) {
      width: auto;
      max-width: ${({ theme }) => sizes[theme.size]};
      padding: 30px;
    }
  }
`;

Contents.defaultProps = {
  theme: {
    size: "default"
  }
};

export default props => {
  return <Contents>{props.children}</Contents>;
};
