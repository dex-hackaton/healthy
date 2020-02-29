import React, { useEffect } from "react";
import { BootstrapContainer } from "./ui/BootstrapContainer";
import { Filter } from "./filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../redux/main/MainSelector";
import { MainActionsAsync } from "../redux/main/MainActionsAsync";
import { EventCard } from "./event/EventCard";

export const MainPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(getEvents);
  console.log("events", events);
  useEffect(() => {
    dispatch(MainActionsAsync.getEvents());
  }, []);

  return (
    <BootstrapContainer>
      <Filter />
      {events.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </BootstrapContainer>
  );
};
