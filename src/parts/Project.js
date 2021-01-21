import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

import Search from "../components/Search";
import CardProject from "../components/CardProject";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: scroll;
    padding: 10px 0;
  }
`;

const Title = styled.h1`
  font-weight: 700;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 25px;
  }
`;

const SubTitle = styled.p`
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default function Project({ data }) {
  return (
    <MainWrapper className="text-white">
      <Fade top duration={1000}>
        <Title>Hi Samantha</Title>
      </Fade>
      <Fade bottom duration={1000}>
        <SubTitle>Welcome back to the workspace, we missed You!</SubTitle>
      </Fade>
      <Search />
      <p className="mb-0 mb-md-3">
        Project <span>({data.count})</span>
      </p>
      <CardWrapper>
        {data.projects.map((project, index) => (
          <Fade bottom duration={900 + 250 * index}>
            <CardProject
              nameCard={project.name}
              notif={project.has_notification}
            />
          </Fade>
        ))}
      </CardWrapper>
    </MainWrapper>
  );
}
