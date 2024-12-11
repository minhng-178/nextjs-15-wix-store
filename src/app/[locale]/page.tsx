import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("common");
  return <div className="flex text-lg">{t("hello")}</div>;
}
