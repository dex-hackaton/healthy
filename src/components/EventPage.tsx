import React from "react";
import {Event} from "./event/Event";

export const EventPage = () => {
  return (
      <div>
        <Event
            title={"Обучение плаванию"}
            isPay={true}
            date={"23  фев 2020"}
            location={"Тирасполь, Центр"}
            description={
              "Провожу занятия по плаванию.\n" +
              "Обучаю таким видам как баттерфляй, брасс, кроль на груди (вольный стиль).\n" +
              "Если вы любите спорт, занимаетесь спортом профессионально, вы знаете, что для развития спортсмену необходим профессиональный тренер."
            }
            organisation={
              "Две команды, регистрация начинается в 10 утраю. Возможно прийти и заявиться целиком командой. Так же по месте поможем составить команду. Планируем провести турнир в 2 этапа.\n" +
              "Открытие турнира 10:00 - 11:00\n" +
              "Первый этап 11:10 - 13:10\n" +
              "Перерыв 13:10 - 14:00\n" +
              "Второй этап 14:10 - 16:10\n" +
              "Награждения 16:10 - 16:30"
            }
            service={
              "Здесь должно быть описание платных услуг. Обязательное поля для мероприятий с флагом “платные”"
            }
            members={[
              {
                photo:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                name: "Jorge Watson"
              },
              {
                photo:
                    "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                name: "Robert Edwards"
              },
              {
                photo:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                name: "Brandon Pena"
              }
            ]}
        />
      </div>
  );
};
