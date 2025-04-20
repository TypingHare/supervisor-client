export function listenKeyDown(
  callback: (key: string) => void
): () => void {
  const listener = function (event: KeyboardEvent) {
    event.preventDefault()
    event.stopPropagation()

    callback(event.key.toLowerCase())
  }
  document.addEventListener('keydown', listener)

  return function () {
    document.removeEventListener('keydown', listener)
  }
}
