"use client"
import LoginForm from "@/components/LoginForm";
import { JWTTokens, Token, useTokenStore } from "@/lib/token.store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    access_token
    refresh_token
  }
}
`;
export default function LoginPage() {
  const [mutateFunction, { data, loading, error }] = useMutation<{ login: { access_token: Token; refresh_token: Token } }>(LOGIN);
  const { set } = useTokenStore()
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <LoginForm
        loading={loading}
        error_message={error ? "Try different password or email" : undefined}
        onSubmit={(email, password) => {
          try {
            mutateFunction({
              variables: { email, password }
            }).then(
              (v) => {
                set({
                  access: v.data!.login.access_token,
                  refresh: v.data!.login.refresh_token
                });
                router.push('/MyInfo/TimeOff')
              }
            )
              .catch((e) => console.log(e))
          } catch (e) {
            console.log('Error occure ', e)
          }
        }}></LoginForm>
    </div>
  )
}
