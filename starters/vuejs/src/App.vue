<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Term {
  id: string;
  word: string;
  definition: string;
  category: string;
}

const glossaryTerms = ref<Term[]>([])
const searchTerm = ref('')
const selectedCategory = ref('Tous')
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/glossary')
    if (!response.ok) throw new Error('Erreur lors du chargement des données')
    glossaryTerms.value = await response.json()
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const categories = computed(() => {
  return ['Tous', ...new Set(glossaryTerms.value.map(t => t.category))]
})

const filteredTerms = computed(() => {
  return glossaryTerms.value.filter(term => {
    const matchesSearch = term.word.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'Tous' || term.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>

<template>
  <div class="container">
    <h1>Glossaire Fullstack (Vue + Node)</h1>
    <p class="subtitle">Pour le groupe Team_JS - Licence 3</p>

    <div v-if="loading">Chargement du glossaire...</div>
    <div v-else-if="error" style="color: red;">Erreur : {{ error }}</div>
    
    <div v-else>
      <div class="filters">
        <input
          type="text"
          placeholder="Rechercher un terme..."
          v-model="searchTerm"
          class="search-input"
        />

        <div class="category-chips">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="['chip', { active: selectedCategory === cat }]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="glossary-grid">
        <div v-if="filteredTerms.length > 0" v-for="term in filteredTerms" :key="term.id" class="card">
          <span class="badge">{{ term.category }}</span>
          <h3>{{ term.word }}</h3>
          <p>{{ term.definition }}</p>
        </div>
        <p v-else class="no-results">Aucun terme trouvé.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Les styles restent identiques à la version précédente */
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #42b883;
}

.subtitle {
  color: #888;
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.search-input {
  width: 100%;
  padding: 12px 20px;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #333;
}

.category-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #42b883;
  background: transparent;
  color: #42b883;
  cursor: pointer;
  transition: all 0.3s ease;
}

.chip:hover {
  background: rgba(66, 184, 131, 0.1);
}

.chip.active {
  background: #42b883;
  color: white;
}

.glossary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  padding: 20px;
  border-radius: 12px;
  background-color: #f0f0f0;
  border: 1px solid transparent;
  transition: transform 0.2s, border-color 0.2s;
  color: #333;
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #42b883;
}

.card h3 {
  margin-top: 25px;
  margin-bottom: 10px;
}

.badge {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 0.75rem;
  background: #42b883;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 50px;
  color: #888;
}

@media (prefers-color-scheme: dark) {
  .search-input {
    background-color: #333;
    border-color: #555;
    color: white;
  }
  .card {
    background-color: #2a2a2a;
    color: white;
  }
}
</style>
