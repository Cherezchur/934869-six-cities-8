import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: 1,
    city: 'Amsterdam',
    photo: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: true,
    housingType: 'apartment',
    rating: 1.9,
    bedroomsNumber: 2,
    guestsMax: 4,
    cost: 120,
    householdItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    ownerInformation: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Kristina',
      isPro: true,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: '2019-07-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: '2016-05-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: '2016-06-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
    ],
  },
  {
    id: 2,
    city: 'Amsterdam',
    photo: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: false,
    housingType: 'apartment',
    rating: 2.7,
    bedroomsNumber: 2,
    guestsMax: 4,
    cost: 280,
    householdItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
    ],
    ownerInformation: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Luana',
      isPro: false,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Den',
        assessment: 3,
        date: '2019-05-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: '2021-01-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
    ],
  },
  {
    id: 3,
    city: 'Paris',
    photo: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: true,
    housingType: 'apartment',
    rating: 3.9,
    bedroomsNumber: 2,
    guestsMax: 4,
    cost: 120,
    householdItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    ownerInformation: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Kristina',
      isPro: true,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 4.4,
        date: '2019-05-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: '2019-05-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: '2019-05-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 5.3,
        date: '2019-05-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: 'June 13',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
    ],
  },
  {
    id: 4,
    city: 'Cologne',
    photo: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    title: 'White castle',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    premium: true,
    housingType: 'apartment',
    rating: 3.9,
    bedroomsNumber: 2,
    guestsMax: 4,
    cost: 120,
    householdItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    ownerInformation: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Kristina',
      isPro: true,
    },
    reviews: [
      {
        avatar: 'img/avatar-max.jpg',
        name: 'Kevin',
        assessment: 3,
        date: '2019-05-08T14:13:56.569Z',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
    ],
  },
];
