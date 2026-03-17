"use client";

import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Resume } from "@/components/Resume";
import { Extracurriculars } from "@/components/Extracurriculars";

export function Extras() {
  return (
    <section id="involvement" className="scroll-mt-24">
      <Education />
      <Skills />
      <Resume />
      <Extracurriculars />
    </section>
  );
}
