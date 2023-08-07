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
import { useTheme } from "./store/themeStore";
import { cn } from "./lib/utils";
import Navbar from "./components/header/Navbar";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();

function App() {
  const theme = useTheme((state) => state.theme);
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={cn(theme)}>
        <div className="bg-white dark:bg-slate-800">
          <Header>
            <Container>
              <Navbar />
            </Container>
            <Container>
              <NameSection />
              <Links />
            </Container>
          </Header>
          <Container>
            <Section title={t("SKILLS, TOOLS & PLATFORMS")}>
              <Skills />
            </Section>
          </Container>
          <Container>
            <Section title={t("EXPERIENCES")}>
              <Experiences />
            </Section>
          </Container>
          <Container>
            <div className="grid grid-cols-3 gap-4 w-full">
              <Section title={t("REFERENCES")}>
                <References />
              </Section>
              <Section title={t("CERTIFICATES")}>
                <Certificates />
              </Section>
              <Section title={t("EDUCATION")}>
                <Education />
              </Section>
            </div>
          </Container>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
