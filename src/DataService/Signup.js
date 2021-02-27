//https://project31-heroku.herokuapp.com/api/v11/user/signup

import axios from "axios";

export const checkSignIn = async (data) => {
  console.log(data);
  return await axios
    .post("https://project31-heroku.herokuapp.com/api/v11/user/signup", data)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

