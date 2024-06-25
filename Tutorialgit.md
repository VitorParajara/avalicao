-Começando um projeto novo-
git initial

- Como clonar um repositório -
git clone https://github.com/VitorParajara/programacao_aplicativo.git

- Configurando -
git config user.email "vitor.v.parajara@gmail.com"
git config usar.name "VitorParajara"

- Selecionando o Branch -
git branch -M main
git remote add origin https://github.com/VitorParajara/programacao_aplicativo.git

- Adicionando arquivos - 
git add .

- Colocando comentário do commit "commitar" -
git commit -m "O que foi realizado"

- Subindo alterações -
git push -u origin main
_______________________
npm install -g nodemon

cd -------/server
npx nodemon src/App.js