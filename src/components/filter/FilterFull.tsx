import React, {useEffect} from "react";
import styled from "styled-components";
import {iconsPaths} from "../../core/iconsPaths";
import {Checkbox, Col} from "antd";
import {useDispatch} from "react-redux";
import {MainActionsAsync} from "../../redux/main/MainActionsAsync";

export const FilterFull = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MainActionsAsync.getCategories());
  }, []);

  return (
      <MainContainer>
        <CrossIcon src={iconsPaths.cross} alt=""/>
        <WhiteContainer>
          <MainBlock>
            <HeadLabel>Уточнить поиск</HeadLabel>
            <SimpleLabel>Категории:</SimpleLabel>
            <Checkbox.Group
                style={{width: "100%"}}
                onChange={val => console.log("val", val)}
            >
              <CheckBoxListBlock>
                <Col span={12}>
                  <CheckBoxBlock>
                    <Checkbox value="A"/>

                    <MyIcon src={iconsPaths.cross}/>
                    <span> A</span>
                  </CheckBoxBlock>
                </Col>
                <Col span={12}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
              </CheckBoxListBlock>
            </Checkbox.Group>
          </MainBlock>
        </WhiteContainer>
      </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 13px;
  left: 15px;
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
`;

const CheckBoxListBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckBoxBlock = styled.div`
  display: flex;
  align-items: center;
`;

const MyIcon = styled.img``;
