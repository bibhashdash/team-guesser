export const checkValidInput = (input: string) => {
  const regex = /^[A-Za-z0-9]*$/;
  if (regex.test(input) || input.includes(" ")) {
    return true;
  }
}
