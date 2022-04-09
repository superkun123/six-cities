const id = function(max:number):number {
  return Math.floor(Math.random() * max * 100);
};

export const offerData = [
  {
    id: id,
    class: 'Premium',
    image: 'https://picsum.photos/200',
    price: '1200€',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: id,
    class: 'Cheap',
    image: 'https://picsum.photos/200',
    price: '150€',
    title: 'Medium apartment at great location',
    type: 'Room',
  },
  {
    id: id,
    class: 'Standart',
    image: 'https://picsum.photos/200',
    price: '320€',
    title: 'House at great location',
    type: 'House',
  },
  {
    id: id,
    class: 'Luxury',
    image: 'https://picsum.photos/200',
    price: '3200€',
    title: 'Luxurious apartment at great location',
    type: 'Castle',
  },
];
