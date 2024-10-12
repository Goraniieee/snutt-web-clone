import { BASE_URL } from "./base";


export const login = async (id: string, pw: string) => {
  const response = await fetch(`${BASE_URL}/auth/login_local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      password: pw
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  const json = await response.json() as {
    user_id: string;
    token: string;
    message: string;
  };

  return json['token'];
};
