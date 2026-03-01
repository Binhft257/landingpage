import { useTranslations } from "next-intl";
import Container from "@/components/UI/Container";
import SectionHeading from "@/components/UI/SectionHeading";
import TestimonialsCarousel from "@/components/Testimonials/TestimonialCarousel";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  brand: string;
};

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="py-14 md:py-16">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <TestimonialsCarousel items={items} intervalMs={3000} />
      </Container>
    </section>
  );
}