import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Library",
  description: "Learn about the vision behind The Library and our mission to inspire the future.",
};
export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto font-serif text-obsidian">
      <h1 className="text-4xl font-bold mb-6 text-gold">About The Library</h1>
      <p className="text-lg leading-relaxed mb-4">
        The Library is a digital sanctuary for those who dare to dream, imagine, and build the future.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Here, we explore the edge of possibility — from advanced technology and architecture to the evolution of art, culture, and humanity itself.
      </p>
      <p className="text-lg leading-relaxed">
        Every scroll, every idea, every spark of curiosity helps shape the world to come. Welcome to your future.
      </p>
      <p className="text-sm text-gray-500">Redeploy test</p>
    </div>
  );
}