"use client";
import ThankyouCard from "@/src/components/card";
import { faker } from "@faker-js/faker";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => i);
  return (
    <main>
      <header>build this out</header>
      <section className="grid gap-3 grid-cols-4">
        {items.map((item) => (
          <ThankyouCard
            key={item}
            description={faker.lorem.paragraph(1)}
            author={faker.person.fullName()}
            country={faker.location.country()}
            image_url={faker.image.url()}
            date={faker.date.recent()}
            title="Thank you Jürgen Klopp"
            avatar_url={faker.image.avatar()}
          />
        ))}
      </section>
    </main>
  );
}
