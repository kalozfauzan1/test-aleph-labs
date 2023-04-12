interface ListProps {
  data: string[];
}
export default function List({ data }: ListProps) {
  return (
    <ul className='divide-y divide-gray-300 text-black'>
      {data.map((val) => {
        return (
          <li key={val} className='px-4 py-2 odd:bg-white even:bg-gray-100'>
            {val}
          </li>
        );
      })}
    </ul>
  );
}
