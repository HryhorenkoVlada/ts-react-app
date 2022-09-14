import { IPerson } from "../../types/interfaces/person";

export interface PeopleState {
  loading: boolean,
  people: IPerson[],
  error: null | string
}
