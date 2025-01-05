const getErrName = (name) => {
  return {
    required_error: `Incorrect or missing ${name}`,
    invalid_type_error: `Incorrect or missing ${name}. (Wrong type)`,
  }
}

export default getErrName