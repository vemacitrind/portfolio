import { useSearchParams } from "react-router-dom"
import Header from "../components/Header"
import FloatingBackground from "../components/FloatingBackground"
import blogs from "../data/blogs.json"

export default function BlogDetail() {
  const [searchParams] = useSearchParams()
  const id = Number(searchParams.get("id"))
  const blog = blogs.find(b => b.id === id)

  if (!blog) {
    return (
      <PageWrapper>
        <Header showBack />
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-2">Blog Not Found</h1>
          <p className="text-[var(--text-muted)]">
            The requested blog could not be found.
          </p>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Header showBack />

      {/* Blog Header */}
      <div className="mb-8 p-6 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl backdrop-blur">
        <h1 className="text-3xl font-bold text-[var(--accent-color)] mb-2">
          {blog.title}
        </h1>
        <p className="text-sm text-[var(--text-muted)]">{blog.date}</p>
      </div>

      {/* Blog Content */}
      <div className="p-6 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl backdrop-blur space-y-6">
        {blog.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p
                  key={index}
                  className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed"
                >
                  {block.text}
                </p>
              )

            case "list":
              return (
                <ul
                  key={index}
                  className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]"
                >
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )

            case "image":
              return (
                <div key={index} className="flex justify-center">
                  <img
                    src={block.src}
                    alt={block.alt || ""}
                    className="rounded-xl border border-[var(--border-color)] max-w-full"
                  />
                </div>
              )

            case "parse":
              return (
                <div key={index} className="flex justify-center">
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                </div>
              )
            case 'header':
              return <h2 key={index} className="text-2xl font-bold mb-4 mt-8 text-[var(--accent-color)]">{block.text}</h2>

            case 'code':
              return <pre key={index} className="mb-4 p-4 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-lg overflow-x-auto backdrop-blur" style={{ fontFamily: 'JetBrains Mono, monospace' }}><code className="text-[var(--accent-color)] text-sm">{block.text}</code></pre>
            default:
              return null
          }
        })}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
        &copy; 2025 Joshi Vedant. All rights reserved.
      </footer>
    </PageWrapper>
  )
}

/* Internal Wrapper (still same file) */
function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <FloatingBackground />
      <div className="max-w-3xl mx-auto p-4 sm:p-8 relative z-10">
        {children}
      </div>
    </div>
  )
}
