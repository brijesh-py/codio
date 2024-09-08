const GenerateUniqueID = (len = 20) => {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let id = "";
  let separate = 5;
  for (let i = 0; i < len; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
      if (id.length % separate == 0) {
        id += "-";
      }
  }
  return id;
};

export default GenerateUniqueID;
