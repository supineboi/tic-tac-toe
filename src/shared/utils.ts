export type Players = "x" | "o"
export type GameState = "play" | "won" | "draw"

export interface Details {
    name: string,
    points: number
}

export type PlayerDetails = Record<Players, Details>

export const colorPanel = {
    lite: "#fdf5e7",
    dark: "#fdc11e"
}

export const playerColors = {
    x: "#317ED6",
    o: "#E76649"
}

export const getPlayerColor = (player: Players) => {
    return playerColors[player];
}