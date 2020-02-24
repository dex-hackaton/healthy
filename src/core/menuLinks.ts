interface IMenuLink {
  name: string;
  path: string;
}

export const MenuLinks: IMenuLink[] = [
  {
    name: "Мероприятия",
    path: "/"
  },
  {
    name: "Статьи",
    path: "/articles"
  },
  {
    name: "Избранное",
    path: "/favorites"
  },
  {
    name: "О проекте",
    path: "/about"
  },
  {
    name: "Профиль",
    path: "/profile"
  }
];
