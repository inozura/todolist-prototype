import React from "react";
import { Checkbox } from "pretty-checkbox-react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import "@djthoms/pretty-checkbox";

const CheckboxWrap = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  margin: 5px 0;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 5px;
    border: 1px solid
      ${(props) => {
        if (props.status === "inProgress") return "#3a83d0";
        if (props.status === "approved") return "#17da69";
        if (props.status === "waiting") return "#929292";
      }};
    border-radius: 5px;
  }
`;

const Status = styled.span`
  display: inline-block;
  padding: 3px 10px;
  position: absolute;
  right: 0;
  border-radius: 5px;

  ${(props) =>
    props.status === "inProgress" &&
    css`
      color: #3a83d0;
      background-color: rgba(118, 184, 255, 0.7);
    `}

  ${(props) =>
    props.status === "approved" &&
    css`
      color: #17da69;
      background-color: rgba(72, 255, 149, 0.7);
    `}

  ${(props) =>
    props.status === "waiting" &&
    css`
      color: #929292;
      background-color: rgba(177, 177, 177, 0.7);
    `}
  
    @media (max-width: 768px) {
    display: none;
  }
`;

export default function CheckboxLive({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <CheckboxWrap status={data.statusName}>
      <Checkbox
        icon={
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png"
            alt="check mark"
            width="25"
            height="25"
          />
        }
        style={{ fontSize: isMobile ? 13 : 20 }}
        animation="jelly"
        shape="round"
      >
        {data.desc}
      </Checkbox>
      <Status status={data.statusName}>{data.status}</Status>
    </CheckboxWrap>
  );
}
