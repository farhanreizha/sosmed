import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@lib/prisma'
import { ISignInCallback } from '@utils/types'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // callbacks: {
  //   async signIn({ user, email, account, profile }: ISignInCallback) {},
  // },
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  // pages: {
  //   signIn: '/auth/signin',
  // },
})
