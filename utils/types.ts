import { Account, Profile, User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'

export interface ReqVerification {
  verificationRequest?: boolean | undefined
}

export interface ISignInCallback {
  user: User | AdapterUser
  account: Account | null
  profile?: Profile | undefined
  email?: ReqVerification | undefined
  credentials?: Record<string, string> | undefined
}
