export const trickOrTreat = (trick: boolean, treat: boolean) => {
  return trick || treat
}
export const trickOrTreat2 = (trick: boolean, treat: boolean) => {
  return !(trick || treat) || treat
}
export const trickOrTreat3 = (trick: boolean, treat: boolean) => {
  return treat || trick
}
