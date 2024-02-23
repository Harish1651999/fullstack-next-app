import Link from "next/link";
import React from "react";

const MealsPage = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>
      <Link
        style={{ color: "white", textAlign: "center", display: "block" }}
        href="/meals/post-1"
      >
        Meals 1
      </Link>
      <Link
        style={{ color: "white", textAlign: "center", display: "block" }}
        href="/meals/post-2"
      >
        Meals 2
      </Link>
    </main>
  );
};

export default MealsPage;
