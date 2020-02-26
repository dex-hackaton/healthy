import React, {useState} from "react";
import styled from "styled-components";
import {iconsPaths} from "../../core/iconsPaths";
import {FilterFull} from "./FilterFull";

interface ISelected {
  names: string[];
  date: string[];
}

export const Filter = () => {
  const [displayFull, setDisplayFull] = useState(false);
  const [selected, setSelected] = useState<ISelected>();

  //{
  //     date: ["1 апр 2020"],
  //     names: ["велоспипед"]
  //   }

  const displayHandler = () => {
    setDisplayFull(!displayFull);
  };

  return (
      <>
        {displayFull ? (
            <FilterFull/>
        ) : (
            <MainBlock onClick={displayHandler}>
              <LeftBlock>
                <SettingsIcon src={iconsPaths.settings}/>
                {selected ? (
                    <Label>
                      Выбрано:{`${selected?.names[0]},`}
                      <a> {`${selected?.date[0]}`} </a>
                    </Label>
                ) : (
                    <Label>Уточнить поиск</Label>
                )}
              </LeftBlock>
              <ArrowIcon src={iconsPaths.arrow}/>
            </MainBlock>
        )}
      </>
  );
};

const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.92);
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  > *:first-child {
    padding-right: 10px;
  }
`;

const SettingsIcon = styled.img``;
const ArrowIcon = styled.img`
  padding: 6px 0;
`;

const Label = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
`;
