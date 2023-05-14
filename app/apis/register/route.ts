import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { userMock } from '@/app/mocks/user.mock';
import { User } from '@/app/interfaces/user.interface';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user: User = userMock;

  // const user = await prisma.user.create({
  //   data: {
  //     email,
  //     name,
  //     hashedPassword,
  //   },
  // });

  return NextResponse.json(user);
}
