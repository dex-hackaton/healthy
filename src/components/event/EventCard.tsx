import React, { useState } from "react";
import { BootstrapContainer } from "../ui/BootstrapContainer";
import styled, { css } from "styled-components";
import { iconsPaths } from "../../core/iconsPaths";
import { Icon } from "antd";

import { EventFooter } from "./EventFooter";
import { IEvent } from "../../api/dto/Event";

export const EventCard: React.FC<IEvent> = ({
  title,
  paid,
  start_time,
  description,
  like,
  place
}) => {
  let [showFull, setShowFull] = useState(false);

  const renderDescription = () => {
    let count = description.length;
    let newDescription = description;
    if (count > 100 && !showFull) {
      newDescription = description.slice(0, 100) + "...";
    }

    return (
      <BodyText>
        {newDescription}
        {count > 100 &&
          (showFull ? (
            <div>
              <a onClick={() => setShowFull(false)}>скрыть</a>
            </div>
          ) : (
            <div>
              <a onClick={() => setShowFull(true)}>подробнее</a>
            </div>
          ))}
      </BodyText>
    );
  };

  return (
    <MainBlock>
      <BootstrapContainer>
        <EventHeader>
          <HeaderTitle isPay={paid}>
            {title}
            {like ? (
              <Icon type="heart" theme="filled" style={{ color: "#FF7875" }} />
            ) : (
              <Icon type="heart" style={{ color: "#D9D9D9" }} />
            )}
          </HeaderTitle>
          <HeaderInfo>
            <Icon type="calendar" />
            {start_time}
            <Icon type="environment" />
            {place}
          </HeaderInfo>
        </EventHeader>
        <EventBody>{renderDescription()}</EventBody>
      </BootstrapContainer>
      <EventFooter
        type={{ id: "swimming", name: "Плавание" }}
        isCheck={false}
      />
    </MainBlock>
  );
};

const MainBlock = styled.div`
  color: #262626;
  font-family: SF Pro Display;
  background-color: #FFF;
`;

const EventHeader = styled.div`
  padding: 20px 0;
`;
const HeaderTitle = styled.h3<{ isPay: boolean }>`
  font-size: 20px;
  line-height: 28px;
  position: relative;
  i {
    position: absolute;
    right: 0;
    top: 4px;
  }
  ${props =>
    props.isPay
      ? css`
          &::after {
          content: "";
          position: absolute;         
          width: 20px;
          height: 20px;
          background-image: url('${iconsPaths.dollar}');
          background-repeat: no-repeat;
          transform: translateX(12px);    
          top: 5px;      
          }
        `
      : css``}
`;

const HeaderInfo = styled.span`
  font-size: 14px;
  line-height: 22px;
  i {
    color: #d9d9d9;
    margin-right: 8px;
    &:nth-child(2) {
      margin-left: 26px;
    }
  }
`;

const EventBody = styled.div``;

const BodyText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #595959;
  margin-bottom: 8px;
`;
