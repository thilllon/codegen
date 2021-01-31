import { Resolvers } from "./resolvers-types-valid";
import { UserModel } from "./models";

const USERS: UserModel[] = [
  {
    _id: "1",
    services: { email: { address: "test@email.com" } },
    profile: { age: 20, firstName: "Dotan", lastName: "Simha" }
  }
];

export const resolvers: Resolvers = {
  Query: {
    user: (parent, args) => {
      return USERS.find(u => u._id === args.id);
    }
  },
  User: {
    id: user => user._id,
    email: user => user.services.email.address
  },
  Profile: {
    name: user => `${user.firstName} ${user.lastName}`
  }
};
