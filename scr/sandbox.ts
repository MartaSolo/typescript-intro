// type alliases

const logDetails = (uid: string | number, item: string) => {
  return `${item} has a uid of ${uid}`;
};

const greet = (user: { name: string; uid: string | number }) => {
  return `${user.name} says hello`;
};

// allias for type string or number
type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
  return `${item} has a uid of ${uid}`;
};

const greet = (user: { name: string; uid: StringOrNum }) => {
  return `${user.name} says hello`;
};

// -----------------------------
type StringOrNum = string | number;
type objectName = { name: string; uid: StringOrNum };

const greet = (user: objectName) => {
  return `${user.name} says hello`;
};
