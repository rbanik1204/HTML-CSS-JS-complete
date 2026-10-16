import { useParams } from "react-router";
export default function Home() {
  const { id } = useParams();
  return (
    <h1 className="font-extrabold text-2xl text-red-500 text-center">
      Home ID: {id}
    </h1>
  );
}
