const useTest = () => {
  const test = () => {
    console.log(alert('Test Hook Worked!'));
  };

  return {
    test,
  };
};

export default useTest;
