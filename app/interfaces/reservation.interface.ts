import { Listing } from './listing.interface';
import { User } from './user.interface';

export interface Reservation {
  id: string;
  userId: string;
  listingId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  createdAt: Date;

  user?: User;
  listing?: Listing;
}
