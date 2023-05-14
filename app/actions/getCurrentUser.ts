import { userMock } from '../mocks/user.mock';

export default async function getCurrentUser() {
  try {
    const currentUser: any = userMock;

    // const currentUser = await prisma.user.findUnique({
    //   where: {
    //     email: session.user.email as string,
    //   },
    // });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
    };
  } catch (error: any) {
    return null;
  }
}
