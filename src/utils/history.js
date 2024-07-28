let navigate;

export const setNavigate = (nav) => {
  navigate = nav;
};

export const getNavigate = () => navigate;

export const nav = (route = "/") => {
  navigate(route);
};
