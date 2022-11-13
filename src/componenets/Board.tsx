import React, {useState} from "react";
import "../styles.css"


const nextChance = (arr: string[]) => {
    return arr.filter((e) => Boolean(e)).length % 2 == 0 ? "X" : "O"
}

const value = (v: string | undefined) => v == undefined ? "" : v

const checkWinner = (arr: string[]) => {
    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]

    return winner.some((s) =>s.every((v) => arr[v] != undefined && arr[v] == arr[s[0]]))
}

const Board: React.FC = () => {
    const [state, setState] = useState<string[]>(Array(9))
    const [winner, setWinner] = useState<"X" | "O" | undefined>(undefined)
    const currentChance = nextChance(state)

    const onClick = (id: number) => {
        if (state[id] || winner) {
            return
        }

        const stateCopy = [...state]
        stateCopy[id] = currentChance
        setState(stateCopy)

        if (checkWinner(stateCopy)) {
            setWinner(currentChance)
        }
    }

    return <div>
        <div>{winner ? <h1>{winner}</h1> : <></>}</div>
        <div>
            <div className="row">
                <button onClick={() => onClick(0)}>{value(state[0])}</button>
                <button onClick={() => onClick(1)}>{value(state[1])}</button>
                <button onClick={() => onClick(2)}>{value(state[2])}</button>
            </div>
            <div>
                <button onClick={() => onClick(3)}>{value(state[3])}</button>
                <button onClick={() => onClick(4)}>{value(state[4])}</button>
                <button onClick={() => onClick(5)}>{value(state[5])}</button>
            </div>
            <div>
                <button onClick={() => onClick(6)}>{value(state[6])}</button>
                <button onClick={() => onClick(7)}>{value(state[7])}</button>
                <button onClick={() => onClick(8)}>{value(state[8])}</button>
            </div>
        </div>
    </div>
}

export default Board