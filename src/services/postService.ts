import APIClient from "./apiClient";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default new APIClient<Post>("/posts");
