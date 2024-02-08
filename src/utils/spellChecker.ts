import axios from "axios";

//맞춤법 검사기 결과 호출
const getSpellCheckerResult = async (stringToCheck: string) => {
  let spellCheckerURL = `https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?passportKey=${localStorage.getItem(
    "spellCheckerPassportKey"
  )}&_callback=mycallback&q=${stringToCheck}&where=nexearch&color_blindness=0&_=1643811632694`;
  let result = await axios.get(spellCheckerURL);

  const jsonData = result.data.match(/\{.*\}/)[0];
  const parsedData = JSON.parse(jsonData);

  const errorMessage = parsedData.message.error;

  //passportkey가 없거나 유효하지 않을 때 passportkey 업데이트
  if (errorMessage === "유효한 키가 아닙니다.") {
    await getSpellCheckerPassportKey();
    spellCheckerURL = `https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?passportKey=${localStorage.getItem(
      "spellCheckerPassportKey"
    )}&_callback=mycallback&q=${stringToCheck}&where=nexearch&color_blindness=0&_=1643811632694`;

    result = await axios.get(spellCheckerURL);
  }

  return result;
};

//html로 파싱된 맞춤법 검사기 get
export const getParsedSpellCheckerResult = async (stringToCheck: string[]) => {
  let checkFinal: string = "";
  let checkerResultDataString: string = "";
  for (let i = 0; i < stringToCheck.length; i++) {
    if (stringToCheck[i] !== "") {
      const result = await getSpellCheckerResult(stringToCheck[i]);
      checkerResultDataString = result.data;
      checkerResultDataString = checkerResultDataString
        .replace("mycallback(", "")
        .replace(");", "");
      checkerResultDataString =
        JSON.parse(checkerResultDataString).message.result.html + "<br>";
      checkFinal = checkFinal + checkerResultDataString;
    }
  }
  return checkFinal;
};

//맞춤법 검사기 passportkey 업데이트
const getSpellCheckerPassportKey = async () => {
  const result = await axios.get(
    `${process.env.REACT_APP_SPELL_URL}/passportKey`
  );

  if (result.status === 200) {
    localStorage.setItem("spellCheckerPassportKey", result.data.passportKey);
  }
};
