import React, { useEffect } from "react";
import { BootstrapContainer } from "./ui/BootstrapContainer";
import { Filter } from "./filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getFilter } from "../redux/main/MainSelector";
import { MainActionsAsync } from "../redux/main/MainActionsAsync";
import { EventCard } from "./event/EventCard";
import styled from "styled-components";

export const MainPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(getEvents);
  const filter = useSelector(getFilter);
  console.log("filter", filter);

  useEffect(() => {
    dispatch(MainActionsAsync.getEvents(["asd"]));
  }, []);

  return (
    <BootstrapContainer>
      <Filter />
      <GrayLine />
      {events.map(event => (
        <React.Fragment key={event.id}>
          <EventCard {...event} />
          <GrayLine />
        </React.Fragment>
      ))}
    </BootstrapContainer>
  );
};

const GrayLine = styled.div`
  width: 100vw;
  height: 16px;
  background: #e5e5e5;
  margin-left: -15px;
`;
