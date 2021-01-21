import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { RandomColor } from "../../utils/RandomColor";

// import "./CardProject.scss";

export default function CardProject({ nameCard, notif }) {
  const [randomColor, setRandomColor] = useState({});

  useEffect(() => {
    setRandomColor(RandomColor());
  }, []);

  const CardProject = styled.div`
    width: 150px;
    height: 150px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-right: 13px;
      width: 100px;
      height: 100px;
    }
  `;

  const MainCard = styled.div`
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    cursor: pointer;
    position: relative;

    &:hover {
      outline: 10px solid rgb(20, 22, 46);
      border: 1px solid skyblue;
    }

    ${notif &&
    css`
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 50px;
        position: absolute;
        margin-top: -5px;
        margin-right: -5px;
        top: 0;
        right: 0;
        background-color: white;
        border: 3.5px solid rgb(20, 22, 46);
      }
    `}

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;

      &:hover {
        outline: 5px solid rgb(20, 22, 46);
        border: 1px solid skyblue;
      }

      ${notif &&
      css`
        &::after {
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50px;
          position: absolute;
          margin-top: -3px;
          margin-right: -3px;
          top: 0;
          right: 0;
          background-color: white;
          border: 3.5px solid rgb(20, 22, 46);
        }
      `}
    }
  `;

  const Title = styled.p`
    text-align: center;
    font-weight: 400;

    @media (max-width: 768px) {
      font-weight: 300;
      font-size: 13px;
    }
  `;

  return (
    <CardProject>
      <MainCard
        style={{
          backgroundImage: `linear-gradient(150deg, #${randomColor.randomColor1}, #${randomColor.randomColor2})`,
        }}
      >
        <span className="init-title">GH</span>
      </MainCard>
      <Title>{nameCard}</Title>
    </CardProject>
  );
}
