import { Container, Header, Footer } from "@/components";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
export default RootTemplate;
