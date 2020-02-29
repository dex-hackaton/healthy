import React, { createRef, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { iconsPaths } from "../../core/iconsPaths";
import { Button, Checkbox, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MainActionsAsync } from "../../redux/main/MainActionsAsync";
import { getCategories } from "../../redux/main/MainSelector";
import { ISelected } from "./Filter";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { MainActions } from "../../redux/main/MainActions";
import moment from "moment";

interface IProps {
  filter: ISelected;
  displayHandler: () => void;
}

export const FilterFull: FC<IProps> = ({ filter, displayHandler }) => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const [startDate, setStartDate] = useState(filter.startDate);
  const [endDate, setEndDate] = useState(filter.endDate);
  const [free, setIsFree] = useState(filter.free);
  const [checkedCategories, setCheckedCategories] = useState<
    CheckboxValueType[]
  >(filter.categories || []);

  const refElement = createRef<HTMLDivElement>();
  useEffect(() => {
    refElement.current && disableBodyScroll(refElement.current);
    return () => clearAllBodyScrollLocks();
  });

  const setFilterHandler = () => {
    dispatch(
      MainActions.setFilter({
        startDate: moment(startDate).format("D MMM YYYY"),
        endDate: moment(startDate).format("D MMM YYYY"),
        free,
        categories: checkedCategories as string[]
      })
    );
  };

  useEffect(() => {
    dispatch(MainActionsAsync.getCategories());
  }, []);

  const setCategoriesHandle = (val: CheckboxValueType[]) => {
    if (val.includes("")) setCheckedCategories([""]);
    else {
      setCheckedCategories(val);
    }
  };

  const applyFilter = () => {
    setFilterHandler();
    displayHandler();
  };

  return (
    <MainContainer ref={refElement}>
      <CrossIcon src={iconsPaths.cross} alt="" onClick={displayHandler} />
      <WhiteContainer>
        <MainBlock>
          <HeadLabel>Уточнить поиск</HeadLabel>
          <SimpleLabel>Категории:</SimpleLabel>
          <Checkbox.Group
            style={{ width: "100%" }}
            value={checkedCategories}
            onChange={setCategoriesHandle}
          >
            <CheckBoxListBlock>
              <CheckBoxBlock>
                <Checkbox value="" checked={checkedCategories.includes("")} />
                <AllCategoriesName>Все категории</AllCategoriesName>
              </CheckBoxBlock>
              {categories &&
                categories.map(item => (
                  <CheckBoxBlock key={item.id}>
                    <Checkbox
                      value={item.id}
                      disabled={checkedCategories[0] === ""}
                    />

                    <MyIcon src={`/categories/${item.id}.svg`} />
                    <CategorieLabel>{item.name}</CategorieLabel>
                  </CheckBoxBlock>
                ))}
            </CheckBoxListBlock>
          </Checkbox.Group>
          <DateBlock>
            <SimpleLabel>Показать в период:</SimpleLabel>
            <DatePicker
              placeholder="C"
              value={startDate}
              onChange={date =>
                date && setStartDate(date)
              }
            />
            <DatePicker
              placeholder="До"
              value={endDate}
              onChange={date => date && setEndDate(date)}
            />
          </DateBlock>
          <ButtonBlock>
            <Checkbox
              checked={free}
              onChange={e => setIsFree(e.target.checked)}
            >
              Не показывать мероприятия с платными услугами
            </Checkbox>
            <MyGrayButton onClick={applyFilter}>
              Применить настройки
            </MyGrayButton>
          </ButtonBlock>
        </MainBlock>
      </WhiteContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  width: calc(100vw - 30px);
  top: 13px;
  left: 15px;
  right: 15px;

  z-index: 20;
`;

const WhiteContainer = styled.div`
  margin-top: 13px;
  width: 100%;
  background: #ffffff;
`;

const CrossIcon = styled.img`
  width: 24px;
  height: 24px;
  background: #bae7ff;
`;

const MainBlock = styled.div`
  padding-top: 24px;
  display: flex;
  flex-flow: column;
  height: calc(100vh - 50px);
`;

const HeadLabel = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
`;

const SimpleLabel = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
`;

const CategorieLabel = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;

  margin-bottom: 0;
`;

const CheckBoxListBlock = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 8px;
`;

const CheckBoxBlock = styled.div`
  display: flex;
  align-items: center;
`;

const MyIcon = styled.img`
  margin-left: 16px;
  margin-right: 10px;
`;

const AllCategoriesName = styled.span`
  white-space: nowrap;
  margin-left: 16px;
`;

const DateBlock = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 24px;

  > :first-child {
    margin-bottom: 8px;
  }

  > :nth-child(2) {
    margin-bottom: 8px;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 24px;
  margin-bottom: 150px;

  > :first-child {
    margin-bottom: 24px;
    white-space: nowrap;
    font-family: SF Pro Display, serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
  }
`;

const MyGrayButton = styled(Button)`
  width: 191px;
  height: 40px;
`;
