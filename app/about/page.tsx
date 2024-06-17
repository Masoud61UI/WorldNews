import Content from "@/components/aboutPage/Content";
import Features from "@/components/aboutPage/Features";
import HeroSection from "@/components/aboutPage/HeroSection";
import Container from "@/components/ui/Container";

export default function page() {
  return (
    <Container className="flex flex-col gap-28">
      <section>
        <HeroSection />
      </section>

      <section>
        <Features />
      </section>

      <section>
        <Content />
      </section>
    </Container>
  );
}
