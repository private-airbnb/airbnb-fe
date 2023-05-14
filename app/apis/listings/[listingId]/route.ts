import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { Listing } from '@/app/interfaces/listing.interface';
import { listingsMock } from '@/app/mocks/listing.mock';

interface IParams {
  listingId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  const listing: Listing[] = listingsMock;

  // const listing = await prisma.listing.deleteMany({
  //   where: {
  //     id: listingId,
  //     userId: currentUser.id,
  //   },
  // });

  return NextResponse.json(listing);
}
