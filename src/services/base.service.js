export default class BaseService {
  constructor(url) {
    this.url = `https://reqres.in/api${url}`;
  }

  async getAll(q) {
    const response = await fetch(`${this.url}`, {
      method: 'GET',
      // params: q
    });

    console.log(q)

    return response.json();
  }
}
