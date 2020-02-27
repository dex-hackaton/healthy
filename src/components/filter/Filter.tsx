import React, {useState} from "react";
import styled from "styled-components";
import {iconsPaths} from "../../core/iconsPaths";
import {FilterFull} from "./FilterFull";

export interface ISelected {
  categories: string[];
  startDate: any;
  endDate: any;
  free: boolean;
}

export const Filter = () => {
  const [displayFull, setDisplayFull] = useState(false);
  const [filter, setFilter] = useState<ISelected>({} as ISelected);

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
            <FilterFull
                filter={filter}
                setFilter={setFilter}
                displayHandler={displayHandler}
            />
        ) : (
            <MainBlock onClick={displayHandler}>
              <LeftBlock>
                <SettingsIcon src={iconsPaths.settings}/>
                {filter.startDate || filter.categories || filter.free ? (
                    <Label>
                      Выбрано:
                      {`${filter?.startDate ||
                      filter.categories[0] ||
                      (filter.free && "Бесплатные")},`}
                      <a>
                        {" "}
                        {`${filter?.startDate ||
                        filter.categories[0] ||
                        (filter.free && "Бесплатные")}`}{" "}
                      </a>
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
