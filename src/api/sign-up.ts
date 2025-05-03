import { api } from "@/lib/axios";

export interface SignUpBody {
  name: string;
  phone: string;
  email: string;
  avatarId?: string;
  password: string;
  passwordConfirmation: string;
}

export async function signUp({
  avatarId,
  email,
  name,
  password,
  passwordConfirmation,
  phone,
}: SignUpBody) {
  await api.post("/sellers", {
    avatarId,
    email,
    name,
    password,
    passwordConfirmation,
    phone,
  });
}
