// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CategoryDocumentDataSlicesSlice = GallerieSlice;

/**
 * Content for Categorie de portfolio documents
 */
interface CategoryDocumentData {
  /**
   * Titre affiché field in *Categorie de portfolio*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: category.display_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  display_title: prismic.TitleField;

  /**
   * Image mise en avant field in *Categorie de portfolio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Categorie de portfolio*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: category.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CategoryDocumentDataSlicesSlice>;
}

/**
 * Categorie de portfolio document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryDocumentData>,
    "category",
    Lang
  >;

/**
 * Item in *Navigation → Items du menu*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Libellé field in *Navigation → Items du menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Lien field in *Navigation → Items du menu*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Élément du menu principal field in *Navigation → Items du menu*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: navigation.links[].main_menu
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  main_menu: prismic.BooleanField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Items du menu field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = GallerieSlice | ContentPageSlice | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Page title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type PortfolioDocumentDataSlicesSlice = never;

/**
 * Content for Portfolio documents
 */
interface PortfolioDocumentData {
  /**
   * Titre SEO field in *Portfolio*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Image mise en avant - mobile - 1 field in *Portfolio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.featured_mobile_image_first
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_mobile_image_first: prismic.ImageField<never>;

  /**
   * Image mise en avant - mobile - 2 field in *Portfolio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.featured_mobile_image_second
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_mobile_image_second: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Portfolio*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PortfolioDocumentDataSlicesSlice> /**
   * Meta Description field in *Portfolio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: portfolio.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Portfolio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Portfolio*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: portfolio.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Portfolio document from Prismic
 *
 * - **API ID**: `portfolio`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PortfolioDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PortfolioDocumentData>,
    "portfolio",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Titre du site field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | CategoryDocument
  | NavigationDocument
  | PageDocument
  | PortfolioDocument
  | SettingsDocument;

/**
 * Primary content in *ContentPage → Primary*
 */
export interface ContentPageSliceDefaultPrimary {
  /**
   * Titre affiché field in *ContentPage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.display_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  display_title: prismic.RichTextField;

  /**
   * Photo field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Texte field in *ContentPage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.text_block
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_block: prismic.RichTextField;

  /**
   * Logo de gauche field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_left
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_left: prismic.ImageField<never>;

  /**
   * Lien - logo de gauche field in *ContentPage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_left_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_left_link: prismic.LinkField;

  /**
   * Logo du milieu field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_center
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_center: prismic.ImageField<never>;

  /**
   * Lien - logo du milieu field in *ContentPage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_center_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_center_link: prismic.LinkField;

  /**
   * Logo de droite field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_right
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_right: prismic.ImageField<never>;

  /**
   * Lien - logo de droite field in *ContentPage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_right_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_right_link: prismic.LinkField;
}

/**
 * Primary content in *ContentPage → Items*
 */
export interface ContentPageSliceDefaultItem {
  /**
   * Pays field in *ContentPage → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].country
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  country: prismic.KeyTextField;

  /**
   * Description field in *ContentPage → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Début du voyage field in *ContentPage → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].start
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start: prismic.DateField;

  /**
   * Fin du voyage field in *ContentPage → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].end
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end: prismic.DateField;

  /**
   * Date / Texte personnalisé field in *ContentPage → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].custom_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  custom_text: prismic.KeyTextField;

  /**
   * Nombre de places restantes field in *ContentPage → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].remaining
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  remaining: prismic.NumberField;

  /**
   * lien field in *ContentPage → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Image Right variation for ContentPage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentPageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentPageSliceDefaultPrimary>,
  Simplify<ContentPageSliceDefaultItem>
>;

/**
 * Primary content in *ContentPage → Primary*
 */
export interface ContentPageSliceImageLeftPrimary {
  /**
   * Titre affiché field in *ContentPage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.display_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  display_title: prismic.RichTextField;

  /**
   * Photo field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Texte field in *ContentPage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.text_block
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_block: prismic.RichTextField;
}

/**
 * Image Left variation for ContentPage Slice
 *
 * - **API ID**: `imageLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentPageSliceImageLeft = prismic.SharedSliceVariation<
  "imageLeft",
  Simplify<ContentPageSliceImageLeftPrimary>,
  never
>;

/**
 * Slice variation for *ContentPage*
 */
type ContentPageSliceVariation =
  | ContentPageSliceDefault
  | ContentPageSliceImageLeft;

/**
 * ContentPage Shared Slice
 *
 * - **API ID**: `content_page`
 * - **Description**: ContentPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentPageSlice = prismic.SharedSlice<
  "content_page",
  ContentPageSliceVariation
>;

/**
 * Primary content in *Gallery → Items*
 */
export interface GallerieSliceDefaultItem {
  /**
   * Photo field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallerie.items[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerieSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<GallerieSliceDefaultItem>
>;

/**
 * Primary content in *Gallery → Primary*
 */
export interface GallerieSlicePrintPrimary {
  /**
   * Titre field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallerie.primary.display_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_title: prismic.KeyTextField;

  /**
   * Texte field in *Gallery → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallerie.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Primary content in *Gallery → Items*
 */
export interface GallerieSlicePrintItem {
  /**
   * Photo field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallerie.items[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;
}

/**
 * Print variation for Gallery Slice
 *
 * - **API ID**: `print`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerieSlicePrint = prismic.SharedSliceVariation<
  "print",
  Simplify<GallerieSlicePrintPrimary>,
  Simplify<GallerieSlicePrintItem>
>;

/**
 * Slice variation for *Gallery*
 */
type GallerieSliceVariation = GallerieSliceDefault | GallerieSlicePrint;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallerie`
 * - **Description**: Gallerie
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerieSlice = prismic.SharedSlice<
  "gallerie",
  GallerieSliceVariation
>;

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Photo field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].slider_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  slider_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CategoryDocument,
      CategoryDocumentData,
      CategoryDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PortfolioDocument,
      PortfolioDocumentData,
      PortfolioDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      ContentPageSlice,
      ContentPageSliceDefaultPrimary,
      ContentPageSliceDefaultItem,
      ContentPageSliceImageLeftPrimary,
      ContentPageSliceVariation,
      ContentPageSliceDefault,
      ContentPageSliceImageLeft,
      GallerieSlice,
      GallerieSliceDefaultItem,
      GallerieSlicePrintPrimary,
      GallerieSlicePrintItem,
      GallerieSliceVariation,
      GallerieSliceDefault,
      GallerieSlicePrint,
      HeroSlice,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}
