import { notFound } from 'next/navigation';
import YouTubeArticleTemplate from '@/app/youtube/_components/YouTubeArticleTemplate';
import { getYouTubePost, youtubePosts } from '../data';

export function generateStaticParams() {
  return youtubePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getYouTubePost(slug);

  if (!post) {
    return {
      title: 'Video not found | Niblah YouTube',
    };
  }

  return {
    title: `${post.title} | Niblah YouTube`,
    description: post.excerpt,
  };
}

function createTocItems(post) {
  return [
    { id: 'overview', label: 'Overview', level: 2 },
    { id: 'what-you-will-build', label: 'What you will build', level: 2 },
    { id: 'implementation-notes', label: 'Implementation notes', level: 2 },
    { id: 'next-steps', label: 'Next steps', level: 2 },
  ];
}

export default async function YouTubeVideoPage({ params }) {
  const { slug } = await params;
  const post = getYouTubePost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <YouTubeArticleTemplate
      title={post.title}
      description={post.excerpt}
      videoId={post.videoId}
      publishDate={post.publishDate}
      readTime={post.readTime}
      category={post.category}
      tags={post.tags}
      tocItems={createTocItems(post)}
    >
      <h2 id="overview">Overview</h2>
      <p>
        This page turns the video into a usable execution note. Watch the walkthrough first, then use the written breakdown below to understand the workflow, tools and implementation order.
      </p>
      <p>
        The core topic is <strong>{post.title}</strong>. The goal is to make the process easier to repeat without relying on scattered notes or rewatching the same sections every time.
      </p>

      <h2 id="what-you-will-build">What you will build</h2>
      <p>
        The video focuses on a practical system inside <strong>{post.category}</strong>. Use this as a starting point, then adapt the workflow to your own stack, offers and operating constraints.
      </p>
      <ul>
        {post.tags.map((tag) => (
          <li key={tag}>A focused implementation layer for {tag}.</li>
        ))}
      </ul>

      <h2 id="implementation-notes">Implementation notes</h2>
      <p>
        Keep the first version simple. Set up the required accounts, connect the core tools, test one clean run, then add automation only after the manual process is clear.
      </p>
      <p>
        Document inputs, outputs and failure points while building. That makes the system easier to debug, delegate and improve later.
      </p>

      <h2 id="next-steps">Next steps</h2>
      <p>
        Start by recreating the smallest useful version from the video. Once that works, add your own templates, naming conventions and reporting fields so the workflow fits your business.
      </p>
    </YouTubeArticleTemplate>
  );
}
