import React, { useState, useCallback } from 'react';

const ListaJogos = () => {
  const [jogos, setJogos] = useState([]);
  const [newJogo, setNewJogo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addJogo = useCallback(() => {
    if (newJogo.trim() !== '') {
      if (isEditing) {
        const updatedJogos = jogos.map((jogo, index) =>
          index === currentIndex ? newJogo : jogo
        );
        setJogos(updatedJogos);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setJogos((prevJogos) => [...prevJogos, newJogo]);
      }
      setNewJogo('');
    }
  }, [newJogo, isEditing, currentIndex, jogos]);

  const removeJogo = useCallback((index) => {
    setJogos((prevJogos) => prevJogos.filter((_, i) => i !== index));
  }, []);

  const editJogo = useCallback((index) => {
    setNewJogo(jogos[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  }, [jogos]);

  return (
    <div>
      <h1>Lista de Jogos</h1>
      <input
        type="text"
        value={newJogo}
        onChange={(e) => setNewJogo(e.target.value)}
        placeholder="Novo Jogo"
      />
      <button onClick={addJogo}>
        {isEditing ? 'Salvar Alteração' : 'Adicionar Jogo'}
      </button>
      <ul>
        {jogos.map((jogo, index) => (
          <li key={index}>
            {jogo}
            <div>
              <button
                className="icon-button edit"
                onClick={() => editJogo(index)}
              >
                &#9998; {/* Unicode para o ícone de lápis */}
              </button>
              <button
                className="icon-button remove"
                onClick={() => removeJogo(index)}
              >
                &#128465; {/* Unicode para o ícone de lixeira */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaJogos;
