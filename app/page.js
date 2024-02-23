import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <Link
        href="/meals"
        style={{ color: "white", textAlign: "center", display: "block" }}
      >
        Meals
      </Link>
      <Link
        href="/meals/share"
        style={{ color: "white", textAlign: "center", display: "block" }}
      >
        Share Meals
      </Link>
      <Link
        href="/community"
        style={{ color: "white", textAlign: "center", display: "block" }}
      >
        Community
      </Link>
    </main>
  );
}
