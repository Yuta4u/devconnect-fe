export function convertMoney(money: number) {
  let temp = money / 1000000
  const converted = temp.toString().replace(".", ",")
  return converted
}
