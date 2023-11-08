import { Container, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import DI from "@/hoc/DI";
import useTodos from "@/state/server/useTodos";

function CreditReport() {
  const { data: todos, isLoading, error } = useTodos();

  // console.log(i);

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

export default DI(CreditReport);
