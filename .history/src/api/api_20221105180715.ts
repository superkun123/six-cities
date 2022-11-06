/* eslint-disable no-console */
import axios from 'axios';


export async function fetchData() {
  let data;
  try {
    const response:any = await axios.get('https://8.react.pages.academy/six-cities/hotels');
    data = response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return data;
}
