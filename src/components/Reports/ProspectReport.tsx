import usePosts from "../../state/server/usePosts";
import { Container, List, ListItem } from "@mui/material";

const ProspectReport = (): React.ReactNode => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <List>
        {posts?.map((post, index) => (
          <ListItem key={index}>{post.title}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProspectReport;
