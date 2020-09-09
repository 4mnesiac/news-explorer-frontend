export default class MainApi {
  constructor(serverUrl) {
    this.server = serverUrl;
  }

  signup(email, password, name) {
    return fetch(`${this.server}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) {
          return data;
        }
        throw new Error(data.message);
      })
      .catch((err) => err);
  }

  signin(email, password) {
    return fetch(`${this.server}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          return data;
        }
        throw new Error(data.message);
      })
      .catch((err) => err);
  }

  getUserData() {
    return fetch(`${this.server}/users/me`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .then((userData) => userData)
      .catch((err) => err);
  }

  getArticles() {
    return fetch(`${this.server}/articles`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .then((data) => data.article)
      .catch((err) => console.error(err));
  }

  createArticle(keyword, image, date, title, text, source, link) {
    return fetch(`${this.server}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      credentials: 'include',
      body: JSON.stringify({
        keyword,
        image,
        date,
        title,
        text,
        source,
        link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .then((article) => article.data)
      .catch((err) => console.error(err));
  }

  removeArticle(id) {
    return fetch(`${this.server}/articles/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
      .catch((err) => console.error(err));
  }
}
