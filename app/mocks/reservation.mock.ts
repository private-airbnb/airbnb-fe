import { Reservation } from '../interfaces/reservation.interface';
import { listingMock } from './listing.mock';

export const reservationsMock: Reservation[] = [
  {
    id: '6950874419',
    userId: '8414557635',
    listingId: '9611210825',
    startDate: new Date(),
    endDate: new Date(),
    totalPrice: 100,
    createdAt: new Date(),

    listing: listingMock,
  },
  {
    id: '5261240266',
    userId: '8414557635',
    listingId: '9611210825',
    startDate: new Date(),
    endDate: new Date(),
    totalPrice: 100,
    createdAt: new Date(),

    listing: listingMock,
  },
];
