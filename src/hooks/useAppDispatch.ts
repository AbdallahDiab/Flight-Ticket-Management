import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store";

const useAppDispatch = (): any => useDispatch<AppDispatch>();
export default useAppDispatch;
