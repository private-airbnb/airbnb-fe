import { Reservation } from './reservation.interface';
import { User } from './user.interface';

export interface Listing {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  createdAt?: Date;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  userId: string;
  price: number;

  user?: User;
  reservations?: Reservation[];
}
