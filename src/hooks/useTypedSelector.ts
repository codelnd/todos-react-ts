import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "../models/models";

const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export default useSelector;
