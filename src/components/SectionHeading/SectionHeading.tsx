type SectionHeadingProps = {
  children: React.ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2
      className="text-center font-semibold text-text-primary"
      style={{ fontSize: "var(--font-size-section-heading)", lineHeight: 1.2 }}
    >
      {children}
    </h2>
  );
}
