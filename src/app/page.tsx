import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", fontSize: "2rem" }}
    >
      <Link href={"/somelanguage/page1"}>Start</Link>
    </div>
  );
}
