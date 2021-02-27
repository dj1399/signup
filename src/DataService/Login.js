import axios from "axios";

export const checkLogin = async (data) => {
  console.log(data);
  return await axios
    .post("https://project31-heroku.herokuapp.com/api/v11/user/login", data)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

