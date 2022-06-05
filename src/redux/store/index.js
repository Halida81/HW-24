import {createStore} from "redux";
import { reducerFunc } from "../reducers/redusers";

export const store=createStore( reducerFunc)