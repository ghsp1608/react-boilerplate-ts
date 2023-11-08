import { useQuery } from "@tanstack/react-query";
import postService, { Post } from "@/services/postService";

const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => {
      return postService.getAll();
    },
    staleTime: 1000 * 60 * 60,
  });
};

export default usePosts;
