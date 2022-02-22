const findTheOldest = function (people) {
  const findCurrentAge = (person) => {
    if (!person.yearOfDeath) {
      const date = new Date();
      return date.getFullYear() - person.yearOfBirth;
    } else return person.yearOfDeath - person.yearOfBirth;
  };
  const oldestAge = people
    .map((person) => findCurrentAge(person))
    .sort()
    .pop();
  const oldestPerson = people.filter((person) => {
    if (findCurrentAge(person) === oldestAge) return true;
  });
  return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
