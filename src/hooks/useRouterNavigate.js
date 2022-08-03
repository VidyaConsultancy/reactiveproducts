import { useNavigate } from "react-router-dom";

export const useRouterNavigate = () => {
  const navigate = useNavigate();
  return navigate;
}
