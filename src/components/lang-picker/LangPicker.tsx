import { ChangeEvent, FC, useState } from "react";
import { Langs } from "../../types/common";
import { Wrapper } from "./styles";

interface Props {
  langs?: Langs[];
  onChange: (lang: string) => void;
}

const LangPicker: FC<Props> = ({ onChange, langs = ['en', 'es'] }) => {
  const [lang, setLang] = useState<string>(langs[0]);

  const onChangeHandler = (ev: ChangeEvent<HTMLSelectElement>) => {
    const lang = ev.target.value;
    setLang(lang);
    onChange(lang);
  };

  return (
    <Wrapper value={lang} onChange={onChangeHandler}>
      {langs.map((lang) => (
        <option value={lang}>{lang.toUpperCase()}</option>
      ))}
    </Wrapper>
  );
};

export default LangPicker;
