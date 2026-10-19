# Tic Tac Toe

A playful, local two-player tic-tac-toe game built with React and TypeScript. Choose your names, take turns on the board, and keep score across rounds.

## Features

- Two-player, same-device gameplay
- Editable player names and live score tracking
- Automatic turn switching and win detection across rows, columns, and diagonals
- Draw detection, round reset, and next-round controls
- Optional looping game music and custom cursor effects

## Tech Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Oxlint

## Getting Started

Install [Node.js](https://nodejs.org/) and npm, then run:

```bash
git clone <your-repository-url>
cd tic-tac-toe
npm install
npm run dev
```

Open the local URL printed by Vite to play. Replace `<your-repository-url>` with the URL of your Git repository.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the app and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## How to Play

1. Select **Throw Hands** to start a game.
2. Enter player names in the score panels; names are limited to 10 characters.
3. Players take turns marking an empty square. The first to connect three marks horizontally, vertically, or diagonally wins the round.
4. A full board without a winner is a draw. Start the next round to keep playing, or reset the current board while the round is in progress.

## Project Structure

```text
src/
├── components/
│   ├── Board/       # Board, player panels, round controls, and result overlay
│   └── Home.tsx     # Start screen and music toggle
├── hook/            # Custom cursor behavior
├── shared/          # Shared game types and utilities
├── UI/              # Reusable buttons and player score panel
└── App.tsx          # App-level screen state
public/              # Static images and favicon
```
