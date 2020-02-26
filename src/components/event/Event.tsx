import React from "react";
import {BootstrapContainer} from "../ui/BootstrapContainer"
import styled, {css} from "styled-components";
import {iconsPaths} from "../../core/iconsPaths";
import { Icon } from "antd";
import {Link} from "react-router-dom";
import {EventFooter} from "./EventFooter";

interface Member {
    photo: string,
    name: string
}

interface Props {
    title: string,
    isPay: boolean,
    //TODO: тип для даты?)
    date: string,
    location: string,
    description: string,
    organisation: string,
    service: string,
    members: Member[],
}

export const Event: React.FC<Props> = ({title, isPay, date, location, description, organisation, service, members}) => {
    const countMemberText = (count: number): string => {
        let temp: string = "";
        switch (count%10) {
            case 1:
                temp = 'участник';
                break;
            case 2: case 3: case 4:
                temp = 'участникa';
                break;
            default:
                temp = 'участников';
                break;
        }
        return `Вступило ${count} ${temp}`;
    };
    return (
        <MainBlock>
        <BootstrapContainer>
            <>
                <EventHeader>
                    <HeaderTitle isPay={isPay}>
                        {title}
                    </HeaderTitle>
                    <HeaderInfo>
                        <Icon type="calendar" />{date}
                        <Icon type="environment" />{location}
                    </HeaderInfo>
                </EventHeader>
                <EvenBody>
                    <EvenBodyBlock>
                        <BodyHeader>Описание</BodyHeader>
                        <BodyText>{description}</BodyText>
                    </EvenBodyBlock>
                    <EvenBodyBlock>
                        <BodyHeader>Организация</BodyHeader>
                        <BodyText>{organisation}</BodyText>
                    </EvenBodyBlock>
                    {isPay &&
                        <EvenBodyBlock>
                            <BodyHeader>Платные услуги</BodyHeader>
                            <BodyText>{service}</BodyText>
                        </EvenBodyBlock>
                    }
                    <EvenBodyBlock>
                        <BodyHeader>Участники</BodyHeader>
                        <MembersBlock>
                            <BodyText>{countMemberText(members.length)}</BodyText>
                            <Link to={"/allMembers"}>Перейти ко всем</Link>
                        </MembersBlock>
                        {
                            members.map((item: Member) => {
                                return (
                                    <MemberItem key={item.name}>
                                    <img src={item.photo} alt={item.name} />
                                        <p>{item.name}</p>
                                    </MemberItem>
                                )
                            })
                        }
                    </EvenBodyBlock>
                </EvenBody>
            </>
        </BootstrapContainer>
        <EventFooter type={{id: "swimming", name: "Плавание"}} isCheck={false}/>
        </MainBlock>
    );
};

const MainBlock = styled.div`
    color: #262626; 
    font-family: SF Pro Display;
`;

const EventHeader = styled.div`
    padding: 20px 0;
`;
const HeaderTitle = styled.h3<{ isPay: boolean }>`
    font-size: 20px;
    line-height: 28px;
    position: relative;  
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
        : css`  
        `}   
`;

const HeaderInfo = styled.span`
    font-size: 14px;
    line-height: 22px;
    i {
        color: #D9D9D9;
        margin-right: 8px;
        &:nth-child(2) {
            margin-left: 26px;
        }
    }
`;

const EvenBody = styled.div`
`;

const BodyHeader = styled.p`      
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;   
    margin-bottom: 10px;
`;

const BodyText = styled.p`      
    font-size: 14px;
    line-height: 22px;
    color: #595959;
     margin-bottom: 8px;
`;

const EvenBodyBlock = styled.div`
    border-bottom: 1px solid #F0F0F0;
    margin-bottom: 16px;
`;

const MembersBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;
const MemberItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 16px;
    }
    p {
        margin-bottom: 0;
    }
`;
