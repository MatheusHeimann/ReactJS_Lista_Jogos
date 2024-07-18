# Lista de Jogos

Este é um projeto React para gerenciar uma lista de jogos, permitindo adicionar, editar e remover jogos.

## Tecnologias Usadas

- React
- CSS puro

## Pré-requisitos

Antes de iniciar, você precisa ter o Node.js e o npm instalados em sua máquina.

## Instalação

1. Clone o repositório para sua máquina:

   ```
   git clone https://github.com/MatheusHeimann/ReactJS_Lista_Jogos

2. Navegue até o diretório do projeto:
    ```
    cd ReactJS_Lista_Jogos

3. Instale as dependências do projeto:
    ```
    npm install

4. Inicie a aplicação
    ```
    npm start

EXPLICAÇÃO DO COMPONENTE

1. Importações e Estados
O componente utiliza os hooks useState e useCallback do React:

useState é usado para definir os estados jogos, newJogo, isEditing e currentIndex.
jogos armazena a lista de jogos.
newJogo armazena o valor do campo de entrada onde o usuário digita o nome do jogo.
isEditing é um booleano que indica se o usuário está editando um jogo existente.
currentIndex armazena o índice do jogo que está sendo editado.

2. Funções Callback
O componente define três funções principais utilizando o hook useCallback:

addJogo: Esta função adiciona um novo jogo à lista ou salva alterações em um jogo existente. Se isEditing for verdadeiro, a função atualiza o jogo no índice currentIndex. Caso contrário, adiciona newJogo à lista de jogos.
removeJogo: Esta função remove um jogo da lista com base no índice fornecido. Ela utiliza filter para criar uma nova lista sem o jogo no índice especificado.
editJogo: Esta função prepara o componente para a edição de um jogo existente. Ela define newJogo com o valor do jogo a ser editado, isEditing como verdadeiro, e currentIndex com o índice do jogo.

3. Renderização
O componente retorna um JSX que inclui:

Um título "Lista de Jogos".
Um campo de entrada (input) onde o usuário digita o nome do jogo.
Um botão que chama addJogo ao ser clicado. O texto do botão muda para "Salvar Alteração" se o usuário estiver editando um jogo.
Uma lista (ul) que exibe todos os jogos. Cada jogo é exibido dentro de um item de lista (li) com dois botões:
Um botão de editar, representado por um ícone de lápis, que chama editJogo ao ser clicado.
Um botão de remover, representado por um ícone de lixeira, que chama removeJogo ao ser clicado.
