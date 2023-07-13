import httpClient from "../http/index";
import { AxiosResponse } from "axios";
import {
  UserModel,
  UserRegistrationModel,
  CheckedTextModel,
  SearchTextModel,
} from "../interfaces";

export const register = async (user: UserRegistrationModel) => {
  const { data } = await httpClient.post<
    UserRegistrationModel,
    AxiosResponse<{ _id: string }>
  >("users/create_user", user);
  return data;
};

export const getUser = async (id: string) => {
  const { data } = await httpClient.get<UserModel>(`users/get_user/${id}`);
  return data;
};

export const checkText = async (text: string, id: string) => {
  const { data } = await httpClient.post<CheckedTextModel[]>(
    "texts/create_and_check_text",
    { text },
    {
      params: {
        pk: id,
      },
    }
  );
  return data;
};

export const searchText = async (id: string, keyword: string) => {
  const { data } = await httpClient.get<SearchTextModel[]>(
    `/texts/search_text/${id}`,
    {
      params: {
        q: keyword,
      },
    }
  );
  return data;
};
