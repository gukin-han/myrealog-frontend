type TypographyH1Props = {
  children: any;
};

export function TypographyH1({ children }: TypographyH1Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold leading-tight md:leading-tight tracking-tight md:text-5xl">
      {children}
    </h1>
  );
}
