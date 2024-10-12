import { BASE_URL } from './base';

export const getMe = async () => {
  const token = sessionStorage.getItem('token');
  if (token == null) {
    throw new Error('No token');
  }

  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get me');
  }

  return (await response.json()) as {
    id: string;
    isAdmin: boolean;
    regDate: string;
    notificationCheckedAt: string;
    email: string;
    localId: string;
    fbName: string;
    nickname: { nickname: string; tag: string };
  };
};
