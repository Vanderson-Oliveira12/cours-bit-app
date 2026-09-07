type Props = React.ComponentProps<'div'>;

export default function FormContainer(props: Props) {
  return (
    <div
      className="
        w-full
        max-w-97
        "
      {...props}
    />
  );
}
