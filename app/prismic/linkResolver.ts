import { type LinkResolverFunction } from "@prismicio/client";

const linkResolver: LinkResolverFunction = (doc) => {
  const prefix = doc.lang === "fr-fr" ? "" : `/${doc.lang}`;

  switch (doc.type) {
    case "page":
      return doc.uid === "home" ? prefix || "/" : `${prefix}/${doc.uid}`;
    case "portfolio":
      return `${prefix}/portfolio`;
    case "category":
      return `${prefix}/portfolio/${doc.uid}`;
    default:
      return prefix || "/";
  }
};

export default linkResolver;
