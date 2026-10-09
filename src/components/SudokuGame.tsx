"use client";

import { useState, useCallback, useEffect } from "react";

type Difficulty = "easy" | "medium" | "hard";

const PUZZLES: Record<Difficulty, { given: number[][]; solution: number[][] }> = {
  easy: {
    // 25 empty cells
    given: [
      [0, 2, 3, 6, 0, 8, 9, 0, 5],
      [5, 8, 0, 0, 3, 9, 7, 6, 0],
      [9, 0, 7, 1, 4, 0, 0, 2, 8],
      [3, 7, 0, 4, 0, 1, 5, 8, 0],
      [0, 9, 1, 0, 8, 3, 0, 7, 4],
      [4, 0, 8, 7, 9, 0, 6, 0, 3],
      [8, 3, 0, 9, 2, 4, 0, 5, 7],
      [0, 1, 9, 0, 5, 7, 4, 3, 0],
      [7, 4, 5, 3, 0, 6, 0, 9, 2],
    ],
    solution: [
      [1, 2, 3, 6, 7, 8, 9, 4, 5],
      [5, 8, 4, 2, 3, 9, 7, 6, 1],
      [9, 6, 7, 1, 4, 5, 3, 2, 8],
      [3, 7, 2, 4, 6, 1, 5, 8, 9],
      [6, 9, 1, 5, 8, 3, 2, 7, 4],
      [4, 5, 8, 7, 9, 2, 6, 1, 3],
      [8, 3, 6, 9, 2, 4, 1, 5, 7],
      [2, 1, 9, 8, 5, 7, 4, 3, 6],
      [7, 4, 5, 3, 1, 6, 8, 9, 2],
    ],
  },
  medium: {
    // 43 empty cells
    given: [
      [1, 0, 0, 4, 8, 9, 0, 0, 6],
      [7, 3, 0, 0, 0, 0, 0, 4, 0],
      [0, 0, 0, 0, 0, 1, 2, 9, 5],
      [0, 0, 7, 1, 2, 0, 6, 0, 0],
      [5, 0, 0, 7, 0, 3, 0, 0, 8],
      [0, 0, 6, 0, 9, 5, 7, 0, 0],
      [9, 1, 4, 6, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 3, 7],
      [8, 0, 0, 5, 1, 2, 0, 0, 4],
    ],
    solution: [
      [1, 5, 2, 4, 8, 9, 3, 7, 6],
      [7, 3, 9, 2, 5, 6, 8, 4, 1],
      [4, 6, 8, 3, 7, 1, 2, 9, 5],
      [3, 8, 7, 1, 2, 4, 6, 5, 9],
      [5, 9, 1, 7, 6, 3, 4, 2, 8],
      [2, 4, 6, 8, 9, 5, 7, 1, 3],
      [9, 1, 4, 6, 3, 7, 5, 8, 2],
      [6, 2, 5, 9, 4, 8, 1, 3, 7],
      [8, 7, 3, 5, 1, 2, 9, 6, 4],
    ],
  },
  hard: {
    // 51 empty cells
    given: [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ],
    solution: [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ],
  },
};

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function boxOf(r: number, c: number) {
  return Math.floor(r / 3) * 3 + Math.floor(c / 3);
}

export function SudokuGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [board, setBoard] = useState<number[][]>(() =>
    PUZZLES.medium.given.map((row) => [...row])
  );
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [solved, setSolved] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // timer starts on first cell click and stops once solved
  useEffect(() => {
    if (!running || solved) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running, solved]);

  const [showWin, setShowWin] = useState(false);

  useEffect(() => {
    if (!showWin) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowWin(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showWin]);

  const puzzle = PUZZLES[difficulty];

  const isGiven = (r: number, c: number) => puzzle.given[r][c] !== 0;

  const isHighlighted = (r: number, c: number) => {
    if (!selected) return false;
    const [sr, sc] = selected;
    return r === sr || c === sc || boxOf(r, c) === boxOf(sr, sc);
  };

  const isSameValue = (r: number, c: number) => {
    if (!selected) return false;
    const [sr, sc] = selected;
    const sv = board[sr][sc];
    return sv !== 0 && board[r][c] === sv && !(r === sr && c === sc);
  };

  const validate = useCallback(
    (b: number[][], sol: number[][]) => {
      const errs = new Set<string>();
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          const v = b[r][c];
          if (v !== 0 && v !== sol[r][c]) errs.add(`${r},${c}`);
        }
      }
      setErrors(errs);
      const isSolved =
        errs.size === 0 && b.every((row, r) => row.every((v, c) => v === sol[r][c]));
      setSolved(isSolved);
      setShowWin(isSolved);
    },
    []
  );

  const setCell = (r: number, c: number, num: number) => {
    if (isGiven(r, c)) return;
    const next = board.map((row) => [...row]);
    next[r][c] = num;
    setBoard(next);
    validate(next, puzzle.solution);
  };

  const handleKeyDown = (e: React.KeyboardEvent, r: number, c: number) => {
    if (e.key >= "1" && e.key <= "9") {
      e.preventDefault();
      setCell(r, c, parseInt(e.key));
    } else if (e.key === "Backspace" || e.key === "Delete" || e.key === "0") {
      e.preventDefault();
      setCell(r, c, 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected([Math.max(0, r - 1), c]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected([Math.min(8, r + 1), c]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSelected([r, Math.max(0, c - 1)]);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSelected([r, Math.min(8, c + 1)]);
    }
  };

  const changeDifficulty = (d: Difficulty) => {
    setDifficulty(d);
    setBoard(PUZZLES[d].given.map((row) => [...row]));
    setSelected(null);
    setErrors(new Set());
    setSolved(false);
    setSeconds(0);
    setRunning(false);
  };

  const reset = () => {
    setBoard(puzzle.given.map((row) => [...row]));
    setSelected(null);
    setErrors(new Set());
    setSolved(false);
    setSeconds(0);
    setRunning(false);
  };

  const givenFlat = puzzle.given.flat();
  const filledCount = board.flat().filter((v, i) => v !== 0 && givenFlat[i] === 0).length;
  const totalEmpty = givenFlat.filter((v) => v === 0).length;

  // a number is "used up" once all 9 of its cells are correctly placed
  const isNumberDone = (n: number) =>
    board.flat().filter((v, i) => v === n && v === puzzle.solution.flat()[i])
      .length === 9;

  const CELL = 32;

  return (
    <div style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      {/* difficulty selector */}
      <div className="flex gap-1 mb-3">
        {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
          <button
            key={d}
            onClick={() => changeDifficulty(d)}
            className="btn"
            style={{
              fontSize: "0.72rem",
              padding: "0.2rem 0.55rem",
              background:
                difficulty === d
                  ? "hsl(var(--accent))"
                  : "hsl(var(--surface-elevated))",
              color:
                difficulty === d
                  ? "hsl(var(--background))"
                  : "hsl(var(--navy))",
              borderColor:
                difficulty === d
                  ? "hsl(var(--accent))"
                  : "hsl(var(--border-light))",
              fontWeight: difficulty === d ? 700 : 400,
            }}
          >
            {d}
          </button>
        ))}
      </div>

      {/* status bar */}
      <div
        className="meta mb-2 flex justify-between items-center"
        style={{ width: `${CELL * 9}px` }}
      >
        <span>
          {solved ? (
            <span style={{ color: "hsl(var(--accent))", fontWeight: 700 }}>
              [ solved! ]
            </span>
          ) : (
            <span>{filledCount}/{totalEmpty} filled</span>
          )}
        </span>
        <span className="flex gap-3">
          <span style={{ color: "hsl(0 62% 55%)" }}>
            {errors.size > 0 && `${errors.size} conflict${errors.size > 1 ? "s" : ""}`}
          </span>
          <span aria-label="elapsed time">{formatTime(seconds)}</span>
        </span>
      </div>

      {/* 9x9 grid */}
      <div style={{ position: "relative", width: "fit-content" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(9, ${CELL}px)`,
          gridTemplateRows: `repeat(9, ${CELL}px)`,
          border: "3px solid hsl(var(--accent))",
          width: "fit-content",
        }}
      >
        {board.map((row, r) =>
          row.map((val, c) => {
            const given = isGiven(r, c);
            const sel = selected?.[0] === r && selected?.[1] === c;
            const hilite = isHighlighted(r, c);
            const sameVal = isSameValue(r, c);
            const hasError = errors.has(`${r},${c}`);

            const rightBorder =
              (c + 1) % 3 === 0 && c < 8
                ? "3px solid hsl(var(--accent))"
                : "1px solid hsl(var(--border-light))";
            const bottomBorder =
              (r + 1) % 3 === 0 && r < 8
                ? "3px solid hsl(var(--accent))"
                : "1px solid hsl(var(--border-light))";

            let bg = "hsl(var(--surface))";
            if (sel) bg = "hsl(212 72% 58% / 0.30)";
            else if (sameVal) bg = "hsl(212 72% 58% / 0.14)";
            else if (hilite) bg = "hsl(var(--surface-elevated))";

            const color = hasError
              ? "hsl(0 62% 58%)"
              : given
              ? "hsl(var(--foreground))"
              : "hsl(var(--navy))";

            return (
              <div
                key={`${r}-${c}`}
                tabIndex={0}
                role="button"
                aria-label={`r${r + 1}c${c + 1}${val ? ` = ${val}` : ""}`}
                onClick={() => {
                  setSelected([r, c]);
                  setRunning(true);
                }}
                onKeyDown={(e) => handleKeyDown(e, r, c)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: `${CELL}px`,
                  height: `${CELL}px`,
                  borderRight: rightBorder,
                  borderBottom: bottomBorder,
                  background: bg,
                  cursor: given ? "default" : "pointer",
                  outline: sel ? "2px solid hsl(var(--accent))" : "none",
                  outlineOffset: "-2px",
                  fontSize: "0.9rem",
                  fontWeight: given ? 700 : 400,
                  color,
                  userSelect: "none",
                  transition: "background 0.08s",
                }}
              >
                {val !== 0 ? val : ""}
              </div>
            );
          })
        )}
      </div>

      {/* win popup — click anywhere to dismiss */}
      {showWin && (
        <div
          role="dialog"
          aria-label="puzzle solved"
          onClick={() => setShowWin(false)}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "hsl(var(--background) / 0.6)",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              background: "hsl(var(--surface-elevated))",
              border: "3px solid hsl(var(--accent))",
              padding: "1rem 1.5rem",
              textAlign: "center",
              boxShadow: "0 4px 16px hsl(0 0% 0% / 0.25)",
            }}
          >
            <div
              style={{
                color: "hsl(var(--accent))",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              good job!
            </div>
            <div className="meta mt-1" style={{ fontSize: "0.72rem" }}>
              solved in {formatTime(seconds)}
            </div>
            <div className="meta mt-2" style={{ fontSize: "0.65rem", opacity: 0.7 }}>
              [ click to close ]
            </div>
          </div>
        </div>
      )}
      </div>

      {/* controls */}
      <div
        className="mt-2 flex items-center gap-3"
        style={{ width: `${CELL * 9}px` }}
      >
        <button
          onClick={reset}
          className="btn"
          style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem" }}
        >
          [ reset ]
        </button>
        <span className="meta" style={{ fontSize: "0.7rem" }}>
          {selected
            ? isGiven(selected[0], selected[1])
              ? "given cell"
              : "type 1–9 or use arrow keys"
            : "click a cell to start"}
        </span>
      </div>

      {/* number pad */}
      <div
        className="mt-2 grid grid-cols-9 gap-px"
        style={{ width: `${CELL * 9}px` }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
          const done = isNumberDone(n);
          return (
            <button
              key={n}
              disabled={done}
              aria-label={done ? `${n} (all placed)` : `${n}`}
              onClick={() => {
                if (selected) setCell(selected[0], selected[1], n);
              }}
              className="btn"
              style={{
                fontSize: "0.78rem",
                padding: "0.25rem 0",
                textAlign: "center",
                borderColor: "hsl(var(--border))",
                background: "hsl(var(--surface-elevated))",
                opacity: done ? 0.25 : 1,
                cursor: done ? "default" : "pointer",
                transition: "opacity 0.3s",
              }}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}
