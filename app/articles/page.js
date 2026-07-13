import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Articles | Rev Vaughn',
  description:
    'Thought leadership from Rev Vaughn on AI writing, revenue systems, and marketing strategy for founder-led brands.',
}

// Teasers only. The full articles live on aiinnercircle.com — see the
// matching 301s in next.config.js for the old local paths.
const FEATURED = {
  href: 'https://aiinnercircle.com/articles/future-of-ai-agents-in-business',
  title: 'The Future of AI Agents in Business',
  date: 'Jan 2, 2026',
  readTime: '9 min read',
  excerpt:
    'One big AI assistant always breaks down. The fix isn\'t a better prompt — it\'s composition over inheritance: a coordinator running a team of small specialists, the same shift the whole AI industry is converging on.',
}

const ARTICLES = [
  {
    href: 'https://aiinnercircle.com/articles/how-ai-content-destroys-trust',
    title: 'How AI-Generated Content Is Destroying Trust',
    subtitle: 'And The Mathematical Solution No One\'s Talking About',
    date: 'Apr 2, 2026',
    readTime: '8 min read',
    excerpt:
      'AI writing has a redundancy problem. Three measurable patterns — antithesis density, copula saturation, fragment clustering — are eroding your credibility below the threshold of conscious detection. The fix isn\'t better prompting. It\'s a quality gate that counts.',
  },
  {
    href: 'https://aiinnercircle.com/articles/why-chatgpt-sounds-robotic',
    title: 'Why ChatGPT Writing Will Always Sound Robotic',
    subtitle: 'And Why There\'s Not a Damn Thing You Can Do About It',
    date: 'Feb 4, 2026',
    readTime: '4 min read',
    excerpt:
      'ChatGPT isn\'t optimized to sound human. It\'s optimized to sound finished. That distinction explains why every fix you\'ve tried has worn off within two paragraphs — and why this is a structural problem, not a prompting problem.',
  },
  {
    href: 'https://aiinnercircle.com/articles/why-ai-writing-sucks',
    title: 'Why AI Writing Sucks And What To Do About It',
    subtitle: null,
    date: 'May 26, 2025',
    readTime: '4 min read',
    excerpt:
      'AI writing doesn\'t fail because it\'s artificial. It fails because it lets you settle. A single AI tool playing every role produces average output. Here\'s what it looks like when you stop prompting and start commanding a team.',
  },
]

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="prose">
          <div className="eyebrow mb-6">Articles</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            The thinking behind the work.
          </h1>
          <p className="text-lead text-ink-muted leading-relaxed">
            AI writing, revenue systems, and marketing strategy for founder-led brands. Written when I have something worth saying. The AI writing pieces are hosted on AI Inner Circle.
          </p>
        </Section>

        {/* Featured article */}
        <Section bg="grey" width="content">
          <div className="border border-accent bg-paper p-8 md:p-10">
            <p className="eyebrow mb-4">Featured Article</p>
            <div className="text-small text-ink-muted mb-3">
              {FEATURED.date} &middot; {FEATURED.readTime}
            </div>
            <h2 className="text-h2 font-semibold text-ink leading-snug mb-4">
              {FEATURED.title}
            </h2>
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              {FEATURED.excerpt}
            </p>
            <Button href={FEATURED.href} external variant="primary">
              Read Article &rarr;
            </Button>
          </div>
        </Section>

        {/* Article list */}
        <Section bg="grey" width="content">
          <div className="space-y-12">
            {ARTICLES.map((article) => (
              <div key={article.href} className="border-l-2 border-accent pl-6 md:pl-8">
                <div className="text-small text-ink-muted mb-3">
                  {article.date} &middot; {article.readTime}
                </div>
                <h2 className="text-h2 font-semibold text-ink leading-snug mb-2">
                  {article.title}
                </h2>
                {article.subtitle && (
                  <p className="text-body text-ink-muted italic mb-4">{article.subtitle}</p>
                )}
                <p className="text-body text-ink-muted leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <Button href={article.href} external variant="primary">
                  Read Article &rarr;
                </Button>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
