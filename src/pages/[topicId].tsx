import { CreateNewPollButton } from '../components/buttons/CreateNewPollButton';
import { Container } from '../components/containers/Container';
import { PostsList } from '../components/posts/PostsList';

export default function Topic() {
  return (
    <Container>
      <CreateNewPollButton className="mb-2" />
      <PostsList />
    </Container>
  );
}
