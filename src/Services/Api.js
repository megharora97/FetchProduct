import React, { Component } from 'react';
import axios from 'axios';
import Config from '../Utils/Config';


//getProductApi
export const getProductApi = () => {
  var authOptions = {
    method: 'GET',
    url: Config.Product,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  console.log('authOptions GET getProductApi :-  ', authOptions)
  return axios(authOptions)
    .then(res => {
      console.log("response getProductApi", res)
      if (res && res.status === 200) {
        console.log('resdata', res.data);
        return res.data;
      }
       else { return res }
    })
    .catch((error) => {
      handleErrors(error)
    });
}

//Handling Errors
function handleErrors(error) {
  console.log('Error :- ', error)
  if (!error.response) {
    // network error
    throw 'Please check your network connection.'
  }
  else {
    // http status code
    const code = error.response.status
    // response data
    const response = error.response.data
    console.log('code :- ' + code + ' response :- ', response)

    if (error.response.status === 400) {
      throw 'Please Provide valid credentials.'
    }
    else {
      throw 'Oops server error occurred'
    }
  }
}


