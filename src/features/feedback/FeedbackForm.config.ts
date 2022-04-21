type Rate = {
  id: string;
  description: String;
};

export type Category = {
  id: string;
  title: String;
  items: Rate[];
};

export type Categories = Category[];

const description =
  "Sets clear and realistic goals, working with others to ensure understanding and agreement *";

const createId = () => `${Math.random()}`;

export const categories: Categories = [
  {
    id: createId(),
    title: "Planning",
    items: [
      {
        id: createId(),
        description,
      },
      {
        id: createId(),
        description,
      },
      {
        id: createId(),
        description,
      },
    ],
  },
  {
    id: createId(),
    title: "Delivering",
    items: [
      {
        id: createId(),
        description,
      },
      {
        id: createId(),
        description,
      },
    ],
  },
  {
    id: createId(),
    title: "Delivering",
    items: [
      {
        id: createId(),
        description,
      },
      {
        id: createId(),
        description,
      },
      {
        id: createId(),
        description,
      },
    ],
  },
];
