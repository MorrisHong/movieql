const people = [
    {
        name : "Deunmo",
        age : 18,
        gender : "mail",
    },
    {
        name : "Ceunmo",
        age : 18,
        gender : "mail",
    },
    {
        name : "Beunmo",
        age : 18,
        gender : "mail",
    },
    {
        name : "Aeunmo",
        age : 18,
        gender : "mail",
    }
]

const resolvers = {
    Query: {
        people: () => people
    },
};

export default resolvers;