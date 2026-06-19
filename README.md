# 🔮 Doze Arcanas — Grimório & Guia de Regras Oficial

O **Doze Arcanas** é uma aplicação web interativa e companion app oficial para o sistema de RPG de mesa focado em aventuras, mistérios e estudos dentro de escolas de magia. Esta plataforma reúne todo o livro de regras, grimório de feitiços e simuladores úteis para os jogadores e mestres.

O núcleo mecânico do sistema baseia-se em rolagens de **2d6+** combinando quatro atributos principais e doze perícias para definir o sucesso das ações mágicas e mundanas.

---

## 🚀 Funcionalidades

- **📖 Livro de Regras Completo**: Seções organizadas para Introdução, Atributos, Combate, Economia, Condições, Casas e Arcanas..
- **🧭 Navegação Inteligente**:
  - *Sidebar* fixa (em telas maiores) com *Scrollspy* de precisão absoluta (detecta a seção ativa baseando-se no viewport atual).
  - Menu de navegação móvel dedicado para smartphones.
- **🎨 Visual Premium Moderno**:
  - Interface com tema escuro (dark mode padrão).
  - Efeitos visuais de blur e gradientes mágicos neon no background.
  - Alertas interativos (toasts) para feedback rápido das ações.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** — Biblioteca frontend para interfaces declarativas.
- **Vite 8** — Build tool ultra-rápida.
- **TailwindCSS 4** — Framework CSS moderno para design e transições limpas.
- **GitHub Actions** — Workflow integrado para Continuous Deployment automático no GitHub Pages.

---

## 💻 Como Rodar Localmente

Para rodar este projeto na sua máquina de desenvolvimento:

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/LPfontes/doze-arcana.git
   cd doze-arcana
   ```

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acessar**:
   Abra o link exibido no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

---

## 🌐 Deploy (GitHub Pages)

O projeto está configurado para deploy automático através de **GitHub Actions**. Qualquer nova alteração enviada à branch `main` disparará uma action de compilação automática que atualizará o site hospedado em:

👉 **[https://lpfontes.github.io/doze-arcana/](https://lpfontes.github.io/doze-arcana/)**
