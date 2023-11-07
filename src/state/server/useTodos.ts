import { useQuery } from "@tanstack/react-query";
import todoService, { Todo } from "../../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () => {
      return todoService.getAll();
    },
    staleTime: 1000 * 60 * 60,
  });
};

export default useTodos;
