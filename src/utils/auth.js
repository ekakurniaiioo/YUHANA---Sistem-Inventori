const SESSION_KEY = "yuhana_user";

export const loginUser = (user) => {
  const sessionUser = {
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(SESSION_KEY);

  if (!user) {
    return null;
  }

  return JSON.parse(user);
};

export const logoutUser = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const isAuthenticated = () => {
  return localStorage.getItem(SESSION_KEY) !== null;
};
