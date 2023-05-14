import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { Listing } from '@/app/interfaces/listing.interface';
import { listingMock } from '@/app/mocks/listing.mock';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { listingId, startDate, endDate, totalPrice } = body;

  if (!listingId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error();
  }

  const listingAndReservation: Listing = listingMock;

  // const listingAndReservation = await prisma.listing.update({
  //   where: {
  //     id: listingId,
  //   },
  //   data: {
  //     reservations: {
  //       create: {
  //         userId: currentUser.id,
  //         startDate,
  //         endDate,
  //         totalPrice,
  //       },
  //     },
  //   },
  // });

  return NextResponse.json(listingAndReservation);
}
