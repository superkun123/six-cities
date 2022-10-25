import { OfferData } from '../types/types';
import { IMG_URL } from './offerData';

export const nearby: OfferData = [
  {
    id: 1,
    class: 'Premium',
    image: `${IMG_URL}apartment-02.jpg`,
    price: '1200€',
    title: 'Beautiful & luxurious apartment at grea t location',
    type: 'Apartment',
    rating: 2,
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 4,
  },
  {
    id: 2,
    class: 'Luxury',
    image: `${IMG_URL}apartment-01.jpg`,
    price: '100€',
    title: 'Beautiful',
    type: 'House',
    rating: 1,
    bedrooms: 2,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 4,
  },
  {
    id: 3,
    class: 'Standart',
    image: `${IMG_URL}apartment-03.jpg`,
    price: '1350€',
    title: 'Beautiful & luxurious apartment at grea t location',
    type: 'Apartment',
    rating: 3,
    bedrooms: 4,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    maxAdults: 4,
  },
  {
    id: 4,
    class: 'Cheap',
    image: `${IMG_URL}room.jpg`,
    price: '699€',
    title: 'great location',
    type: 'Room',
    rating: 5,
    bedrooms: 4,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    maxAdults: 4,
  },
];
