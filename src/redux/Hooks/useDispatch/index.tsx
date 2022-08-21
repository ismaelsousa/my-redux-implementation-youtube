import { useContext } from "react";
import { ContextRedux } from "../../Context";

const useDispatch = () => {
  const { dispatch } = useContext(ContextRedux);

  return dispatch;
};

export default useDispatch;
