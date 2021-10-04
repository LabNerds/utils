const step = (gen) => {
  var it = gen();
  var last;

  return function () {
    last = it.next(last).value;
  };
};

export { step };
