export const WithNavigate = (Component, apiCall) => {
  const greet = (name) => `Hello ${name}`;
  return () => {
    return (<Component greet={greet} />)
  }
}
