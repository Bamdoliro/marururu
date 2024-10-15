const formatName = (name: string) => {
  return name.length > 6 ? `${name.slice(0, 6)}...` : name;
};

export default formatName;
