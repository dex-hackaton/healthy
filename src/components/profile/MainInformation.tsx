import React from "react";
import styled from "styled-components";
import {BootstrapContainer} from "../ui/BootstrapContainer";
import {iconsPaths} from "../../core/iconsPaths";
import {Icon} from "antd";
import {EventCard} from "../event/EventCard";

interface Props {
    indexBody: number;
    needWeight: number;
    goal: string;
    energy: number;
    water: number;
}

export const MainInformation: React.FC<Props> = ({indexBody, needWeight,goal, energy, water }) => {
    return (
        <MainContainer>
            <BootstrapContainer>
                <InfoBlock>
                    <InfoItem>
                        <IconImage src={iconsPaths.height} alt=""/>
                        <span>Индекс массы тела</span>
                        <DataBlock>
                            {indexBody}
                        </DataBlock>
                    </InfoItem>
                    <InfoItem>
                        <IconImage src={iconsPaths.weight} alt=""/><span>Цель: {goal}</span>
                        <DataBlock>
                            {needWeight} кг
                        </DataBlock>
                    </InfoItem>
                    <InfoItem>
                        <IconImage src={iconsPaths.fire} alt=""/><span>Энергозатраты</span>
                        <DataBlock>
                            {energy} Ккал
                        </DataBlock>
                    </InfoItem>
                </InfoBlock>
                <InfoBlock>
                    <InfoItem>
                        <IconImage src={iconsPaths.water} alt=""/><span>Вода</span>
                    </InfoItem>
                    <div>
                        <Water>
                            <WaterLevel level={water/5*100}>
                                <span>{water} л</span>
                            </WaterLevel>
                        </Water>
                    </div>
                    <InfoItemBetween>
                      <span>
                          0 л
                      </span>
                        <span>
                            5 л
                      </span>
                    </InfoItemBetween>
                    <InfoItem>
                        <span>Рекомендуемо воды в день</span>
                        <DataBlock>
                            {water} л
                        </DataBlock>
                    </InfoItem>
                </InfoBlock>
                <InfoBlock>
                    <InfoItem>
                        <IconImage src={iconsPaths.bulb} alt=""/><span>Советы</span>
                    </InfoItem>
                    <InfoItemBetween>
                        <span>Неподалеку проходит мероприятие</span>
                        <Icon type="arrow-right" style={{ color: "#40A9FF" }}/>
                    </InfoItemBetween>
                    <Line />
                    <InfoItemBetween>
                        <span>Планируйте режим тренировок в спортивном зале. Найдите мероприятия для совместных походов или создайте свое.</span>
                        <Icon type="arrow-right" style={{ color: "#40A9FF" }}/>
                    </InfoItemBetween>
                    <Line />
                    <InfoItemBetween>
                        <span>Вы планируете набор веса?<br/>
                            Проконсультируйтесь по этому вопросу у эндокринолога. Вам поможет раздел с базой мед. учреждений республики. </span>
                        <Icon type="arrow-right" style={{ color: "#40A9FF" }}/>
                    </InfoItemBetween>
                </InfoBlock>
                <Recomendation>
                    Рекомендации:
                </Recomendation>
               <EventCard
                   id={"1"}
                   city={"Тирасполь"}
                   organization_description={""}
                   paid_description={""}
                   activity={"basketball"}
                title={"Турнир по баскетболу"}
                paid={false}
                start_time={"23  фев 2020"}
                description={"Организовываем турнир по баскетболу. Допускаются новички и профи, сбалансируем команды. Участие бесплатно, по итогу турнира будут призы победителям."}
                like={false}
                place={"Тирасполь, Центр"} />
            </BootstrapContainer>
        </MainContainer>
    );
};

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0 0;

  color: #8c8c8c;
`;

const MainContainer = styled.div`
`;

const InfoBlock = styled.div`
    margin: 16px 0;
    padding: 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #595959;
    }
    &:first-of-type {
         margin: 0;
    }
`;
const InfoItem = styled.div`
    margin-bottom: 16px;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

const DataBlock = styled.div`
    float: right;
    font-weight: 600;
    color: #262626;
`;

const IconImage = styled.img`
    margin-right: 8px;
`;

const Water = styled.div`
    width: 100%;
    height: 4px;
    background-color: #F5F5F5; 
    position: relative;
`;

const WaterLevel = styled.div<{level: number}>`
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.level}%;
    height: 4px;
    background-color: #91D5FF;
    span {
        position: absolute;
        right: -15px;
        font-size: 14px;
        line-height: 22px;
        color: #595959;
        top: -25px;
    }
`;

const InfoItemBetween = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    align-items: center;
    i {
        align-self: flex-end;
    }
`;

const Line = styled.hr`
    border-color: #ffffff;
`;

const Recomendation = styled.p`
    font-size: 20px;
    line-height: 28px;
    color: #000000;
`;