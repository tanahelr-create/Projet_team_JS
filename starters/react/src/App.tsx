import { useState, useEffect, useMemo } from 'react'
import './App.css'

interface Term {
  id: string;
  word: string;
  definition: string;
  category: string;
}

function App() {
  const [glossaryTerms, setGlossaryTerms] = useState<Term[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Récupération des données depuis l'API
  useEffect(() => {
    fetch('http://localhost:3000/api/glossary')
      .then(response => {
        if (!response.ok) throw new Error('Erreur lors du chargement des données');
        return response.json();
      })
      .then(data => {
        setGlossaryTerms(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [])

  const categories = useMemo(() => {
    return ['Tous', ...new Set(glossaryTerms.map(t => t.category))]
  }, [glossaryTerms])

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'Tous' || term.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, glossaryTerms])

  if (loading) return <p>Chargement du glossaire...</p>
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>

  return (
    <div className="container">
      <h1>Glossaire Fullstack (React + Node)</h1>
      <p className="subtitle">Pour le groupe Team_JS - Licence 3</p>

      <div className="filters">
        <input
          type="text"
          placeholder="Rechercher un terme..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="category-chips">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`chip ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="glossary-grid">
        {filteredTerms.length > 0 ? (
          filteredTerms.map(term => (
            <div key={term.id} className="card">
              <span className="badge">{term.category}</span>
              <h3>{term.word}</h3>
              <p>{term.definition}</p>
            </div>
          ))
        ) : (
          <p className="no-results">Aucun terme trouvé.</p>
        )}
      </div>
    </div>
  )
}

export default App
