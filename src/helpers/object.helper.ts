export const empty = (n: any) => {
    return !(n
      ? typeof n === 'object'
        ? Array.isArray(n)
          ? !!n.length
          : !!Object.keys(n).length
        : true
      : false);
  };
  