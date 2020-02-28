import React, {createRef, useState} from "react";
import {BootstrapContainer} from "../ui/BootstrapContainer"
import styled, {css} from "styled-components";
import {iconsPaths} from "../../core/iconsPaths";
import { Icon } from "antd";
import {Link} from "react-router-dom";
import {EventFooter} from "./EventFooter";
import {useOnClickOutside} from "../../core/hooks/useOnClickOutside";

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
    members: Member[]
}

export const Event: React.FC<Props> = ({title, isPay, date, location, description, organisation, service, members}) => {

    let [showMenu, setShowMenu] = useState(false);
    const refElement = createRef<HTMLDivElement>();
    useOnClickOutside(refElement, () => setShowMenu(false));

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
                        <MenuBlock ref={refElement}>
                            <Icon type="more" onClick={() => setShowMenu(true)}/>
                            <MenuBlockItems isShown={showMenu}>
                                <MenuBlockItem>Поделиться</MenuBlockItem>
                                <MenuBlockItem>Пожаловаться</MenuBlockItem>
                            </MenuBlockItems>
                        </MenuBlock>
                    </HeaderTitle>
                    <HeaderInfo>
                        <Icon type="calendar" />{date}
                        <Icon type="environment" />{location}
                    </HeaderInfo>
                </EventHeader>
                <EventBody>
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
                                        <img src={item.photo} alt={item.name}/>
                                        <p>{item.name}</p>
                                    </MemberItem>
                                )
                            })
                        }
                    </EvenBodyBlock>
                </EventBody>
            </>
        </BootstrapContainer>
                <Line/>
        <EventFooter type={{id: "swimming", name: "Плавание"}} isCheck={true}/>
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

const EventBody = styled.div`
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
    &:last-of-type {
    border: none;
    }
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

const Line = styled.hr`
    border-color: #D9D9D9;    
`;
const MenuBlock = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;
const MenuBlockItems = styled.ul<{isShown: boolean}>`
    position: absolute;
    left: -100px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;   
    list-style-type: none;
    padding: 0;
    padding: 10px 0;
    opacity: ${props => props.isShown ? 1 : 0};
    transition: opacity .3s;
`;

const MenuBlockItem = styled.li`
    font-size: 14px;
    line-height: 22px;  
    color: #595959;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 0 12px;
    &:last-of-type {
        margin-bottom: 0px;
    }
    &:hover {
        background-color: #CCC;
    }
`;

