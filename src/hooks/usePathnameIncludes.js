import { useLocation } from "react-router-dom";

export const usePathnameIncludes = (substring) => {
  const location = useLocation();
  return location.pathname.includes(substring);
};
