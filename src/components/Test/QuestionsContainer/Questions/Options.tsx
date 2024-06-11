interface OptionsProps {
  options: string[];
}

export const Options = ({ options }: OptionsProps) => {
  console.log(options);
  return (
    <ul>
      {options.map((o) => (
        <li key={o}>
          <button>{o}</button>
        </li>
      ))}
    </ul>
  );
};
