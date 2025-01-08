import {
  Container,
  Header,
  HeaderMobile,
  MobileNavigation,
  WebNavigation,
} from "@/components";
import Suggestion from "@/components/Suggestion";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <HeaderMobile />
      <MobileNavigation />
      <Container>
        <WebNavigation />
        <div className="child">{children}</div>
        <Suggestion />
      </Container>
    </>
  );
};
export default RootTemplate;
