import Container from "@/components/ui/Container";
import HeroSection from "@/components/homePage/HeroSection";
import NewBlogs from "@/components/homePage/NewBlogs";
import About from "@/components/homePage/About";

export default function HomePage() {
  return (
    <div>
      <Container className="pt-8 md:py-4 flex flex-col gap-20">
        <section>
          <HeroSection />
        </section>

        <section>
          <NewBlogs />
        </section>
        
        <section>
          <About />
        </section>

      </Container>
    </div>
  );
}
