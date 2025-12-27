import React from 'react'
import "../Estilos/SearchBar.css"

function SearchBar({ searchTerm, onSearch, onGenreChange, genres, selectedGenre }) {
    const handleClear = () => {
        onSearch('')
    }

    return (
        <div className="search-container">
            <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Buscar libros..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    className="search-input"
                />
                {searchTerm && (
                    <button onClick={handleClear} className="clear-btn">
                        ✕
                    </button>
                )}
            </div>

            <div className="genre-filters">
                {genres.map(genre => (
                    <button
                        key={genre}
                        className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                        onClick={() => onGenreChange(genre)}
                    >
                        {genre === 'todos' ? 'Todos' : genre}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SearchBar