import { Container, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import useTodos from "../../state/server/useTodos";

export default function CreditReport() {
  const { data: todos, isLoading, error } = useTodos();

  if (isLoading) {
    return <Box>Loading ...</Box>;
  }

  if (error) {
    return <Box>Error loading data ...</Box>;
  }

  return (
    <Container>
      <List>
        {todos?.map((todo, index) => (
          <ListItem key={index}>{todo.title}</ListItem>
        ))}
      </List>
    </Container>
  );
}
