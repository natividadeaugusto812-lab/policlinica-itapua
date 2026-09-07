# Policlínica Itapuã

## Nome do projeto
Policlínica Itapuã

## Descrição do site
Site institucional estático para apresentação da Policlínica Itapuã, com foco em apresentar a clínica, especialidades médicas, exames, convênios, localização, horários de atendimento e canais de contato.

## Objetivo do projeto
Apresentar a clínica de forma profissional e acessível, com navegação por seções, contato direto por WhatsApp e telefone, além de informações sobre serviços e localização em Salvador — BA.

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript puro (vanilla JS)
- Google Fonts
- Arquivos locais em SVG, JPG e MP4
- Estrutura estática sem framework ou build tools

## Estrutura de pastas e arquivos
```text
Projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── img/
│   │   ├── logo.svg
│   │   └── clinic-poster.jpg
│   └── video/
│       └── clinic-tour.mp4
├── .gitignore
├── README.md
└── (opcional) LICENSE
```

## Como executar o projeto localmente
1. Abra o terminal na pasta do projeto.
2. Execute:

```bash
python -m http.server 8080
```

3. Acesse no navegador:

```text
http://localhost:8080
```

Se o comando `python` não estiver disponível no ambiente, tente:

```bash
py -m http.server 8080
```

## Como testar o projeto
- Abra a página em um navegador local.
- Verifique os links internos, botões de WhatsApp, telefone e Instagram.
- Confirme a navegação por menu e o comportamento de rolagem.
- Valide o vídeo e a imagem de capa.
- Teste em desktop, tablet e celular para verificar a responsividade.

## Como publicar no GitHub Pages
Como o projeto é totalmente estático, ele pode ser publicado no GitHub Pages sem necessidade de build ou dependências.

### Passos básicos
1. Crie um repositório no GitHub.
2. Envie os arquivos do projeto para o repositório.
3. No GitHub, acesse o repositório e vá para "Settings" > "Pages".
4. Escolha a branch principal e a pasta raiz para publicar.
5. Salve a configuração.

Observação: o projeto usa caminhos relativos, então os arquivos locais continuam funcionando corretamente quando publicados em um ambiente estático como o GitHub Pages.

## Funcionalidades principais
- Navegação por seções com âncoras internas
- Menu responsivo para dispositivos móveis
- Seções de apresentação, especialidades, exames, convênios, localização e contato
- Botões de WhatsApp e telefone
- Link para Instagram
- Mapa incorporado do Google Maps
- Vídeo local com imagem de capa
- Rodapé com informações de atendimento e links rápidos
- Atualização automática do ano no rodapé
- Animações de entrada ao rolar a página
- Acessibilidade básica com foco visível e link para pular ao conteúdo

## Informações sobre responsividade
O layout foi projetado para funcionar em desktop, tablet e celular. O menu mobile, os blocos de conteúdo e a navegação foram adaptados para manter a leitura e a usabilidade em telas menores.

## Recursos externos utilizados
- Google Fonts: Inter e Roboto Slab
- Google Maps embed
- WhatsApp links externos
- Instagram links externos

## Instruções para manutenção e edição
- Edite o conteúdo e textos em `index.html`.
- Ajuste os estilos em `css/style.css`.
- Ajuste comportamentos e interações em `js/script.js`.
- Mantenha os arquivos de mídia na pasta correta:
  - imagens em `assets/img/`
  - vídeos em `assets/video/`
- Preserve os caminhos relativos para garantir que o projeto funcione localmente e em hospedagem estática.

## Observações importantes
- O projeto não requer instalação de dependências.
- O vídeo e a imagem local são referenciados por caminhos relativos.
- O conteúdo atual deve ser validado pela clínica antes da publicação oficial, especialmente dados de contato, horários, convênios e redes sociais.
- O projeto usa o número de WhatsApp e telefone já configurados no código.
- Não há estrutura de build ou compilação neste projeto.

## Créditos
Projeto desenvolvido para apresentação institucional da Policlínica Itapuã.

## Licença
Não foi incluída uma licença específica neste repositório. Se for necessário publicar o projeto com uma licença definida, recomenda-se adicionar um arquivo `LICENSE` apropriado antes do lançamento público.
