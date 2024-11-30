import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CDN Caching Demo</h1>
      <p>Very Large Image on a static page</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/largeImage.jpg"
          alt="Sample Image"
          width={1000}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
