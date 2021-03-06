import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ short, darkmode }) {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(i18n.language);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    setComponent(
      <select
        className={`bg-transparent text-gray-400 outline-none cursor-pointer ml-2 ${short ? "uppercase" : ""}`}
        value={value}
        onChange={(e) => {
          if (value != e.target.value && Object.keys(i18n.services.resourceStore.data).includes(e.target.value)) {
            i18n.changeLanguage(e.target.value);
            setValue(e.target.value);
          }
        }}
      >
        {Object.keys(i18n.services.resourceStore.data).map((lng) => {
          return (
            <option value={lng} key={lng}>
              {short ? lng : t(lng)}
            </option>
          );
        })}
      </select>
    );
  }, [value, t, i18n]);

  return <div className="select-container">{component}</div>;
}
