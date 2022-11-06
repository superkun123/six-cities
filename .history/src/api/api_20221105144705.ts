/* eslint-disable no-console */
import axios from 'axios';

export async function fetchData() {
  try {
    const response:any = await axios.get('https://8.react.pages.academy/six-cities/hotels', 5000);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
