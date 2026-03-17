"use client";

import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Resume } from "@/components/Resume";
import { Leadership } from "@/components/Leadership";
import { Extracurriculars } from "@/components/Extracurriculars";

export function Extras() {
  return (
    <section id="extras" className="scroll-mt-24">
      <Education />
      <Skills />
      <Resume />
      <Leadership />
      <Extracurriculars />
    </section>
  );
}
