const deckSuits = 'cdhs'
const deckCards = 'A23456789TJQK'
const suitLength = deckCards.length

export function encode (input: string[]): number[] {
  return sortAscending(input.map(encodeCard))
}

export function decode (input: number[]): string[] {
  return sortAscending(input).map(decodeSymbol)
}

function encodeCard ([card, suit]: string): number {
  return deckCards.indexOf(card) + computeSuitRange(suit)
}

function decodeSymbol (code: number): string {
  const suit = decodeSuit(code)
  const card = decodeCard(code, suit)
  return `${card}${suit}`
}

function decodeSuit (code: number) {
  return deckSuits[Math.floor(code / suitLength)]
}

function decodeCard (code: number, suit: string) {
  return deckCards[code - computeSuitRange(suit)]
}

function computeSuitRange (suit: string) {
  return Math.floor(deckSuits.indexOf(suit) * suitLength)
}

function sortAscending <T> (arr: T[]) {
  return arr.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  })
}
