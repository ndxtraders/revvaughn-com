export default function Section({ children, className = '', id, bg = 'paper', width = 'content' }) {
  const bgMap = {
    paper: 'bg-paper',
    grey: 'bg-paper-grey',
    greyDark: 'bg-paper-greyDark',
  }
  const widthMap = {
    prose: 'max-w-prose',
    content: 'max-w-content',
    wide: 'max-w-wide',
  }
  return (
    <section id={id} className={`${bgMap[bg]} py-section ${className}`}>
      <div className={`${widthMap[width]} mx-auto px-6`}>{children}</div>
    </section>
  )
}
