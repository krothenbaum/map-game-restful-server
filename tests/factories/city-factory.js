import faker from 'faker';

class CityFactory {
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
      city: faker.address.city(),
      lat: faker.address.latitude(),
      lon: faker.address.longitude(),
      wikipedia: faker.address.city()
    }, attrs);
  }
}

export default new CityFactory();
