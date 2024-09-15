import { gql } from '@apollo/client';
import { z } from 'zod'

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters long' })
    .trim(),
})

export type Profile = {
  id: number,
  name: string,
  avatar: string
}
export const placeholderProfile = {
  id: -1,
  name: '',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
}

export const GET_PROFILE = gql`
query {
  myProfile {
    id
    name
    avatar
  }
}
`;
