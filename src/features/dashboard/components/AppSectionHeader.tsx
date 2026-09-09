type Props = {
  title: string;
  description: string;
};

export default function AppSectionHeader({ title, description }: Props) {
  return (
    <header>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}
