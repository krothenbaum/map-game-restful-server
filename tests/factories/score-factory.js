import faker from 'faker';

class ScoreFactory {
  generateList(count, attrs = {}) {
    let list = []
    while(count) {
      list.push(this.generate(attrs));
      count--;
    }
    return list;
  }

  generate(attrs) {
    return Object.assign({}, {
      name: faker.name.firstName(),
      score: faker.random.number()
    }, attrs);
  }
}

export default new ScoreFactory();
