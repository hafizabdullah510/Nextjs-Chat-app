import Link from "next/link";
export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">ChatSphere</h1>
          <p className="text-lg leading-loose py-6">
            ChatSphere: Your ultimate messaging hub. Powered by innovation, it
            keeps you connected, engaged, and in sync — anytime, anywhere!
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
