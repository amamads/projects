import { useEffect } from "react"

function GameHistory({p1Scores,p2Scores}) {
    return (
        <section id="gameHistory">
            <table className="bg-[#b67794] w-full overflow-hidden rounded-xl  text-center shadow-2xl">
                <thead>
                    <tr>
                        <td colSpan={2} className="text-2xl text-[#7c4966] font-bold">Game History</td>
                    </tr>
                    <tr>
                        <td className="bg-[#ffffff5e]"><h3>player 1</h3></td>
                        <td className="bg-[#ffffff5e]"><h3>player 2</h3></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{p1Scores[0]}</td>
                        <td>{p2Scores[0]}</td>
                    </tr>
                    <tr>
                        <td>{p1Scores[1]}</td>
                        <td>{p2Scores[1]}</td>
                    </tr>
                    <tr>
                        <td>{p1Scores[2]}</td>
                        <td>{p2Scores[2]}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default GameHistory