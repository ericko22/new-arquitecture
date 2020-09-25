import UseCases from "../../../Application/UseCases"
import {GET_USER} from "./types";

const {user: UserUseCases} = UseCases

export const getUser = () => {
  const user = UserUseCases.getUser()
  return {type: GET_USER, payload: user}
}
