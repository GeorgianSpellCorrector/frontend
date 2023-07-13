export interface UserRegistrationModel {
  username: FormDataEntryValue;
}

export interface UserModel {
  _id: string;
  username: string;
  ip_address: string;
  created_at: string;
}

export interface CheckedTextModel {
  bad: string;
  better: string[];
  offset: number;
  length: number;
}

export interface SearchTextModel {
  id: string;
  user_id: string;
  text: string;
  rating: number;
  corrected_text: string;
  corrected_text_cleaned: string;
  suggested_text: string;
  created_at: string;
  updated_at: string;
}
