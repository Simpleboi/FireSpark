import React, { useState, ReactNode } from "react";
import "./Accordion.scss";

export interface AccordionItem {
  title: string; // The title of the accordion section
  content: ReactNode; // The content inside the section
}

export interface AccordionProps {
  items: AccordionItem[]; // List of accordion items
  allowMultiple?: boolean; // Allow multiple sections to expand simultaneously
  defaultExpanded?: number[]; // Index(es) of sections to be expanded by default
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpanded = [],
}) => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>(
    defaultExpanded
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setExpandedIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) 
          : [...prev, index]
      );
    } else {
      setExpandedIndexes((prev) =>
        prev.includes(index) ? [] : [index] // Allow only one expanded at a time
      );
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="accordion__header"
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <span>
              {expandedIndexes.includes(index) ? "-" : "+"}
            </span>
          </div>
          <div
            className={`accordion__content ${
              expandedIndexes.includes(index) ? "accordion__content--expanded" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
