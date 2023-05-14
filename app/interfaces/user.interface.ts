import { Account } from './account.interface';
import { Listing } from './listing.interface';
import { Reservation } from './reservation.interface';
export interface User {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
  hashedPassword?: string;
  createdAt: Date;
  updatedAt: Date;
  favoriteIds: string[];

  accounts?: Account[];
  listings?: Listing[];
  reservations?: Reservation[];
}
