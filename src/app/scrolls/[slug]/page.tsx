import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Scroll = {
  title: string;
  content: string;
};

const scrolls: { [key: string]: Scroll } = {
  "ai-and-humanity": {
    title: "AI and the Future of Humanity",
    content:
      "This scroll explores how artificial intelligence is shaping the trajectory of civilization. From ethics to automation, discover what lies ahead.",
  },
  "digital-renaissance": {
    title: "The Digital Renaissance",
    content:
      "A deep dive into the cultural, artistic, and technological rebirth we're living through — and how it mirrors great shifts in history.",
  },
};

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  return Object.keys(scrolls).map((slug) => ({ slug }));
}

// Generate metadata for each scroll
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const scroll = scrolls[params.slug];

  if (!scroll) {
    return {
      title: "Not Found | The Library",
      description: "The scroll you're looking for could not be found.",
    };
  }

  return {
    title: `${scroll.title} | The Library`,
    description: scroll.content,
  };
}

// Main page component
type PageProps = {
  params: { slug: string };
};

export default async function ScrollPage({ params }: PageProps) {
  const scroll = scrolls[params.slug];

  if (!scroll) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-gold">{scroll.title}</h1>
      <p className="text-lg leading-relaxed text-obsidian">{scroll.content}</p>
    </div>
  );
}
