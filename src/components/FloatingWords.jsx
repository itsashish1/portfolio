import './FloatingWords.css'

export default function FloatingWords() {
  const words = [
    'C++',
    'Python',
    'JavaScript',
    'React',
    'Coding',
    'Algorithms',
    'Development',
    'Web Dev',
    'DSA',
    'Open Source'
  ]

  return (
    <div className="floating-words-bg">
      {words.map((word, index) => (
        <span 
          key={index} 
          className="floating-word-bg"
          style={{
            '--delay': `${index * 0.5}s`,
            '--duration': `${15 + Math.random() * 10}s`,
            '--start-position': `${Math.random() * 100}%`
          }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

