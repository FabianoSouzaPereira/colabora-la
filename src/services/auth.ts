import api from './api';

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
  email: string;
  username: string;
  password: string;
  request: string;
  reject: string;
  headers: string;
  data: string;
  update: string;
  status: number;
  content: string;
  contentdata: {
    activeUserLikedIt: string;
    activeUserLovedIt: string;
    author: {
      id: string;
      username: string;
    };
    content: string;
    createdAt: string;
    id: string;
    feedId: number;
    like: string;
    love: string;
    updatedAt: string;
  };
}

export function signIn(email: string, password: string): Promise<Response> {
  return new Promise<Response>((resolve) => {
    resolve(
      api
        .get(`/sign-in/?username=${email}`, {
          password: password,
        })
        .then(function (response: { data: any; status: any }) {
          if (
            response.data[0].password === password &&
            response.data != undefined
          ) {
            console.log(response.data[0].id);
            return response;
          }
          return '';
        })
        .catch(function (response: any) {
          console.log('Erro ao tentar fazer a requisição - ' + response.error);
          return response.error;
        })
    );
  });
}

export function register(email: string, password: string): Promise<Response> {
  return new Promise((resolve) => {
    resolve(
      api
        .post('/sign-up', {
          username: email,
          password: password,
        })
        .then(function (response: { data: any; status: any }) {
          console.log(response.data);
          return response.status;
        })
        .catch(function (response: any) {
          console.log(response);
          return response;
        })
    );
  });
}

export function forgotPassword(username: string): Promise<Response> {
  return new Promise((resolve) => {
    resolve(
      api
        .get('/forgot-password/' + username)
        .then(function (response: any) {
          return response;
        })
        .catch(function (response: { status: any }) {
          if (response.status < '500') {
            console.log(response.status);
            return response.status;
          }
        })
    );
  });
}

export function feed(
  title: string,
  content: string,
  author: string,
  create?: Date,
  update?: Date
): Promise<Response> {
  return new Promise((resolve) => {
    resolve(
      api
        .post('/news', {
          title: title,
          text: content,
          author: author,
          createdAt: create,
          updatedAt: update,
        })
        .then(function (response: { status: any; data: any }) {
          console.log(response.status);
          return response.data;
        })
        .catch((error: any) => {
          console.log(error);
        })
    );
  });
}

export function reaction(
  feedId: number,
  like: boolean,
  love: boolean
): Promise<Response> {
  return new Promise((resolve) => {
    resolve(
      api
        .post('/reaction', {
          feedId: feedId,
          like: like,
          love: love,
        })
        .then(function (response: { status: number }) {
          console.log(response.status);
          var res: any = '';
          if (response.status === 200) {
            res = 'Ok';
          }
          return res;
        })
        .catch((error: any) => {
          console.log(error);
        })
    );
  });
}
