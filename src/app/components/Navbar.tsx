import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#333",
        color: "#fff",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>

      <Link href="/blog/1" style={{ color: "#fff", textDecoration: "none" }}>
        Blog
      </Link>

      <Link href="/about" style={{ color: "#fff", textDecoration: "none" }}>
        About
      </Link>

      <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

