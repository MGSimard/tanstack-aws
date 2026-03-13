// Full-width pages

export function LayoutWide({ children }: { children: React.ReactNode }) {
  return <div className="flex grow flex-col gap-8 p-6 pb-4 md:px-8">{children}</div>;
}
