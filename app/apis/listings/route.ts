import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { listingMock } from '@/app/mocks/listing.mock';
import { Listing } from '@/app/interfaces/listing.interface';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing: Listing = listingMock;

  // const listing = await prisma.listing.create({
  //   data: {
  //     title,
  //     description,
  //     imageSrc,
  //     category,
  //     roomCount,
  //     bathroomCount,
  //     guestCount,
  //     locationValue: location.value,
  //     price: parseInt(price, 10),
  //     userId: currentUser.id,
  //   },
  // });

  return NextResponse.json(listing);
}
