import { Listing } from '../interfaces/listing.interface';
import { reservationsMock } from './reservation.mock';
import { userMock } from './user.mock';

export const listingMock: Listing = {
  id: '9611210825',
  title: 'Double room in lovely apartment',
  description:
    'Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.',
  category: 'Stay with Valentina . Interior designer',
  createdAt: new Date(),
  roomCount: 100,
  bathroomCount: 100,
  guestCount: 100,
  locationValue: 'AT',
  userId: '8414557635',
  price: 100,
  imageSrc:
    'https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720',
};

export const listingsMock: Listing[] = [
  {
    id: '6955652660',
    title: 'Double room in lovely apartment',
    description:
      'Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.',
    createdAt: new Date(),
    category: 'Stay with Valentina . Interior designer',
    roomCount: 100,
    bathroomCount: 100,
    guestCount: 100,
    locationValue: 'AT',
    userId: '8414557635',
    price: 100,
    imageSrc:
      'https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720',
  },
  {
    id: '2048139698',
    title: 'Double room in lovely apartment',
    description:
      'Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.',
    createdAt: new Date(),
    category: 'Stay with Valentina . Interior designer',
    roomCount: 100,
    bathroomCount: 100,
    guestCount: 100,
    locationValue: 'AT',
    userId: '8414557635',
    price: 100,
    imageSrc:
      'https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720',
  },
];

export const favoritesListingMock: Listing[] = [
  {
    id: '1065996206',
    title: 'Double room in lovely apartment',
    description:
      'Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.',
    createdAt: new Date(),
    category: 'Stay with Valentina . Interior designer',
    roomCount: 100,
    bathroomCount: 100,
    guestCount: 100,
    locationValue: 'AT',
    userId: '8414557635',
    price: 100,
    imageSrc:
      'https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720',
  },
  {
    id: '0775549963',
    title: 'Double room in lovely apartment',
    description:
      'Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.',
    createdAt: new Date(),
    category: 'Stay with Valentina . Interior designer',
    roomCount: 100,
    bathroomCount: 100,
    guestCount: 100,
    locationValue: 'AT',
    userId: '8414557635',
    price: 100,
    imageSrc:
      'https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720',
  },
];
