import React, { useState, useEffect } from 'react'
import SearchBar from "../components/SearchBar.jsx"
import "../Estilos/Buscador2.css"

const sampleBooks = [

    { id: 1, title: 'Guía para prevenir accidentes de tránsito jóvenes', author: 'Secretaría de Salud', genre: 'Cuidado Vial', year: 2018, link: 'https://www.gob.mx/salud/documentos/guia-para-prevenir-accidentes-de-transito-jovenes' },
    { id: 2, title: 'Guía para prevenir accidentes de tránsito en jóvenes', author: 'Policía Federal (SSPC)', genre: 'Cuidado Vial', year: 2018, link: 'https://www.gob.mx/epn%7Cpoliciafederal/articulos/guia-para-prevenir-accidentes-de-transito-en-jovenes' },
    { id: 3, title: 'Recomendaciones de seguridad vial para niñas y niños', author: 'SICT', genre: 'Cuidado Vial', year: 2024, link: 'https://www.gob.mx/sct/prensa/emite-sict-recomendaciones-de-seguridad-vial-para-ninas-y-ninos?idiom=es' },
    { id: 4, title: 'Manual de señalización y dispositivos para el control del tránsito', author: 'SEDATU / SICT', genre: 'Cuidado Vial', year: 2024, link: 'https://www.gob.mx/sedatu/documentos/manual-de-senalizacion-y-dispositivos-para-el-control-del-transito-en-calles-y-carreteras?state=published' },
    { id: 5, title: 'El rompecabezas de la prevención en México', author: 'Rebeca Elizabeth Contreras López', genre: 'Prevención del delito', year: 2015, link: 'https://www.uv.mx/cedegs/files/2016/02/Libro-Rompecabezas.pdf' },
    { id: 6, title: 'Prevención social de las violencias y el delito', author: 'Emilio Daniel Cunjama López, Alan García Huitron', genre: 'Prevención del delito', year: 2021, link: 'https://generaconocimiento.segob.gob.mx/sites/default/files/document/biblioteca/213/20210409-prevencion-social-violencias.pdf' },
    { id: 7, title: 'La prevención del delito', author: 'Máximo Carvajal Contreras', genre: 'Prevención del delito', year: 1994, link: 'https://archivos.juridicas.unam.mx/www/bjv/libros/1/159/30.pdf' },
    { id: 8, title: 'Manual sobre la aplicación eficaz de las Directrices para la prevención del delito', author: 'Naciones Unidas (UNODC)', genre: 'Prevención del delito', year: 2011, link: 'https://www.unodc.org/documents/justice-and-prison-reform/crimeprevention/Handbook_on_the_Crime_Prevention_Guidelines_Spanish.pdf' }
]

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredBooks, setFilteredBooks] = useState(sampleBooks)
    const [genreFilter, setGenreFilter] = useState('todos')

    const genres = ['todos', 'Cuidado Vial', 'Prevención del delito']

    useEffect(() => {
        let results = sampleBooks

        if (genreFilter !== 'todos') {
            results = results.filter(book => book.genre === genreFilter)
        }

        if (searchTerm.trim() !== '') {
            const searchLower = searchTerm.toLowerCase()
            results = results.filter(book =>
                book.title.toLowerCase().includes(searchLower) ||
                book.author.toLowerCase().includes(searchLower)
            )
        }

        setFilteredBooks(results)
    }, [searchTerm, genreFilter])

    return (
        <div className="app">
            <header className="header">
                <h1>📚 Biblioteca Cecytem</h1>
                <p>Busca libros por título o autor</p>
            </header>

            <main className="main">
                <SearchBar
                    searchTerm={searchTerm}
                    onSearch={setSearchTerm}
                    onGenreChange={setGenreFilter}
                    genres={genres}
                    selectedGenre={genreFilter}
                />

                <div className="results">
                    <div className="results-header">
                        <h2>
                            {searchTerm ? `"${searchTerm}"` : 'Todos los libros'}
                            {genreFilter !== 'todos' && ` - ${genreFilter}`}
                        </h2>
                        <span className="count">{filteredBooks.length} libros</span>
                    </div>

                    {filteredBooks.length > 0 ? (
                        <div className="books">
                            {filteredBooks.map(book => (
                                <div key={book.id} className="book">
                                    <div className="book-icon">
                                        {book.genre === 'Fantasía' ? '🐉' : '👻'}
                                    </div>
                                    <div className="book-info">
                                        <h3>{book.title}</h3>
                                        <p className="author">{book.author}</p>
                                        <div className="details">
                                            <span className="genre">{book.genre}</span>
                                            <span className="year">{book.year}</span>
                                        </div>
                                        <a href={book.link} target="_blank" rel="noopener noreferrer" className="view-button">
                                            Ver
                                        </a>

                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>🔍 No se encontraron libros</p>
                            <button onClick={() => {
                                setSearchTerm('')
                                setGenreFilter('todos')
                            }}>
                                Mostrar todos
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <footer className="footer">
                <p>CECYTEM - Biblioteca Digital © {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}

export default App