"use client";

import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Extracurriculars } from "@/components/Extracurriculars";

export function Extras() {
  return (
    <section id="involvement" className="scroll-mt-[var(--nav-height)]">
      <Education />
      <Skills />
      <Extracurriculars />
    </section>
  );
}
