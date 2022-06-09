import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t, i18n } = useTranslation();

  const categories = [
    { title: t("category_gettingstarted"), path: "getting-started" },
    { title: t("category_uninstall"), path: "uninstall" },
  ];

  const articles = [
    {
      title: t("article_downloading"),
      path: "downloading",
      category: "getting-started",
    },
    {
      title: t("article_installing"),
      path: "installing",
      category: "getting-started",
    },
  ];

  const getArticles = (category) => articles.filter((a) => a.category === category);

  return (
    <aside className="col-span-1">
      {categories.map((category) => {
        return (
          <div key={category.path} className="first:mt-0 mt-4 mb-2 last:mb-0">
            <h2 className="uppercase font-light text-gray-50">{category.title}</h2>
            {getArticles(category.path).map((article) => (
              <Link href={`/documentation/${i18n.language}/${article.path}`} key={article.path}>
                <a className="block ml-1 mb-1 text-lg text-gray-100 hover:underline">{article.title}</a>
              </Link>
            ))}
          </div>
        );
      })}
    </aside>
  );
}
