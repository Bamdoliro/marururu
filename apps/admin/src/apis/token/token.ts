const authorization = (accessToken: string | null) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

authorization.FormData = (accessToken: string | null) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  };
};

export default authorization;
