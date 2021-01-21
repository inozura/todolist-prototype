import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

import Checkbox from "../components/Checkbox";
import DotsMenu from "../assets/svg/three-dots-menu-pngrepo-com.png";
import AddButton from "../assets/svg/icons8-plus.svg";

const SectionDetail = styled.section`
  height: 100%;
  width: 100%;
  padding: 30px 0;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 7px 15px 0 15px;
    overflow-y: hidden;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  border-radius: 10px 0 0 10px;
  padding: 10px 40px;
  position: relative;

  @media (max-width: 768px) {
    border-radius: 10px 10px 0 0;
    padding: 10px 20px;
    overflow-y: scroll;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 25px;
    margin-top: 5px;
  }
`;

const SubTitle = styled.p`
  font-weight: 300;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 11px;
    margin-bottom: 10px;
  }
`;

const HeadList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 30px;
  height: 30px;
  padding: 30px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6342f5;
  box-shadow: 0 14px 30px rgba(99, 66, 245, 0.6);
  right: 0;
  bottom: 0;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    padding: 20px;
  }
`;

export default function Detail({ data }) {
  return (
    <SectionDetail>
      <Wrapper>
        <Fade left duration={1000}>
          <Title>Cyberpunk</Title>
        </Fade>
        <Fade duration={900}>
          <SubTitle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
            mollitia.
          </SubTitle>
        </Fade>
        <HeadList>
          <span className="fw-bolder">Today</span>
          <img src={DotsMenu} alt="dotmenu" width="20" />
        </HeadList>
        <hr />
        {data.to_do.map((todo, index) => (
          <Fade right duration={900 + 100 * index}>
            <Checkbox data={todo} />
          </Fade>
        ))}
        <Button>
          <img src={AddButton} alt="add" width="30" />
        </Button>
      </Wrapper>
    </SectionDetail>
  );
}
