import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Ranjika",
    lastName: "Ranji",
    email: "ranjika22@gmail.com",
    password: "Ranjika@22",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
