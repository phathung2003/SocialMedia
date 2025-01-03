import { Container, Header } from "@/components";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
export default RootTemplate;
