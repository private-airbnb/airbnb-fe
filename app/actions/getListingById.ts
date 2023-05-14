import { listingMock } from '../mocks/listing.mock';

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { listingId } = params;

    const listing: any = listingMock;

    // const listing = await prisma.listing.findUnique({
    //   where: {
    //     id: listingId,
    //   },
    //   include: {
    //     user: true,
    //   },
    // });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      user: {
        ...listing.user,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
