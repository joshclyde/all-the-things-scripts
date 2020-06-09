// https://docs.google.com/document/d/1OFS-3ocSx-1Rvg4afAnEHlT3917MAK_6eJTR6rzr-BM/edit
const {
  refreshGetMatchIdsByQueue,
} = require("./src/api/endpoints/getMatchIdsByQueue");

const execute = async () => {
  await refreshGetMatchIdsByQueue("conquest", "20200606", "0");
};

execute();
