"use client";

import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { AccordionItem } from "@/components/ui/accordion-item";

interface ProductDescriptionProps {
  description?: string;
  highlights?: string[];
  material?: string;
  fit?: string;
  care?: string;
}

export default function ProductDescription({
  description,
  highlights = [],
  material,
  fit,
  care,
}: ProductDescriptionProps) {
  /** 1️⃣ Sections config – dễ mở rộng */
  const sections = useMemo(
    () =>
      [
        {
          id: "overview",
          label: "Overview",
          content: description && (
            <p className="text-sm text-foreground/80">{description}</p>
          ),
        },
        {
          id: "details",
          label: "Details",
          content:
            material || fit ? (
              <div className="space-y-2 text-sm">
                {material && (
                  <p>
                    <span className="font-medium">Material:</span> {material}
                  </p>
                )}
                {fit && (
                  <p>
                    <span className="font-medium">Fit:</span> {fit}
                  </p>
                )}
              </div>
            ) : null,
        },
        {
          id: "care",
          label: "Care",
          content: care && <p className="text-sm text-foreground/80">{care}</p>,
        },
      ].filter((s) => s.content),
    [description, material, fit, care]
  );

  /** 2️⃣ Multi-expand state */
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!sections.length) return null;

  return (
    <div className="space-y-6">
      {/* Static description + highlights (optional) */}
      {description && (
        <p className="text-lg leading-relaxed text-foreground/90">
          {description}
        </p>
      )}

      {highlights.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold">Key Features</h3>
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span className="text-foreground/80">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Accordion */}
      <div className="space-y-3 border-t border-border pt-6">
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            label={section.label}
            isOpen={expandedMap[section.id]}
            onToggle={() => toggle(section.id)}
          >
            {section.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
