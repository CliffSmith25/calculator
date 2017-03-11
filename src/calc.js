
export default function calc (arg, stack) {
  if (stack === 'Start Adding!') stack = ''
  switch (arg) {
    case 'C':
      return 'Start Adding!'
    case 'backsp':
      return stack.slice(0, -1)
    case '=':
      return calcStack(stack)
    default:
      return stack + arg
  }
}

function calcStack (stack) {
  /* eslint-disable no-new-func */
  return new Function('return ' + stack)()
}
