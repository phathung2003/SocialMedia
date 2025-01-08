import {
  Container,
  Header,
  MobileNavigation,
  WebNavigation,
} from "@/components";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      <div className="body" id="body">
        <WebNavigation />
        <div className="content" id="content">
          {children}
        </div>
      </div>

      <MobileNavigation />
    </Container>
  );
};
export default RootTemplate;
