const polifyMap = () => {
  if (!Promise.map) {
    Promise.map = function (vals, cb) {
      return Promise.all(
        vals.map(function (val) {
          return new Promise(function (resolve) {
            cb(val, resolve);
          });
        })
      );
    };
  }
};

export { polifyMap };
