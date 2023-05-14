import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites: any = undefined;
    // const favorites = await prisma.listing.findMany({
    //   where: {
    //     id: {
    //       in: [...(currentUser.favoriteIds || [])],
    //     },
    //   },
    // });

    const safeFavorites = favorites.map((favorite: any) => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
