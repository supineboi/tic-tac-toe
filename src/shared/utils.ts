export type Players = "x" | "o"
export type GameState = "play" | "won" | "draw"

export interface Details {
    name: string,
    points: number
}

export type PlayerDetails = Record<Players, Details>

export const offColor = "#DFD4D2";

export const playerColors = {
    x: "#317ED6",
    o: "#E76649"
}

export const getPlayerColor = (player: Players) => {
    return playerColors[player];
}