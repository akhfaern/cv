import Section from "./components/Section";
import Skills from "./components/skills/Skills";
import Container from "./components/Container";
import Header from "./components/header/Header";
import Links from "./components/header/Links";
import NameSection from "./components/header/NameSection";
import Experiences from "./components/experience/Experiences";
import References from "./components/References";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-6">
        <Header>
          <Container>
            <NameSection />
            <Links />
          </Container>
        </Header>
        <Container>
          <Section title="SKILLS, TOOLS & PLATFORMS">
            <Skills />
          </Section>
        </Container>
        <Container>
          <Section title="EXPERIENCES">
            <Experiences />
          </Section>
        </Container>
        <Container>
          <div className="grid grid-cols-3 gap-4 w-full">
            <Section title="REFERENCES">
              <References />
            </Section>
            <Section title="CERTIFICATES">
              <Certificates />
            </Section>
            <Section title="EDUCATION">
              <Education />
            </Section>
          </div>
        </Container>
      </div>
    </QueryClientProvider>
  );
}

export default App;
