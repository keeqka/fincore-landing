export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-10">
        <span className="font-mono text-xs text-ink-label">Hlow Flow · {new Date().getFullYear()}</span>
        <div className="flex gap-5 text-sm">
          <a href="#privacy" className="text-ink-muted hover:text-ink">
            Политика данных
          </a>
          <a href="#support" className="text-ink-muted hover:text-ink">
            Поддержка
          </a>
        </div>
      </div>
    </footer>
  )
}
