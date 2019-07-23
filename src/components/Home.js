import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Contents = styled.div`
  & {
    width: 50%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    margin: 10% auto 0;
    padding: 60px 10%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const Home = () => (
  <Contents>
    <Typography variant="h2">Home</Typography>
  </Contents>
);

export default Home;
