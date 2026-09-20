"use client";

import { ExamCaseCard } from "@/components/exam-case-card";
import { EXAM_CASES } from "@/data/cards";

export function ExamCases() {
  return (
    <div className="space-y-6">
      {EXAM_CASES.map((exam, ei) => (
        <ExamCaseCard key={ei} exam={exam} badge="Original" />
      ))}
    </div>
  );
}
