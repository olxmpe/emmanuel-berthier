// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CategoryDocumentDataSlicesSlice = GallerieSlice;

/**
 * Content for Categorie documents
 */
interface CategoryDocumentData {
  /**
   * Image d'entête field in *Categorie*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Categorie*
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
 * Categorie document from Prismic
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

type PageDocumentDataSlicesSlice =
  | CategoriesSlice
  | GallerieSlice
  | ContentPageSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Titre SEO field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent: prismic.ContentRelationshipField<"page">;

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
  | SettingsDocument;

/**
 * Primary content in *Categories → Items*
 */
export interface CategoriesSliceDefaultItem {
  /**
   * Catégorie field in *Categories → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.items[].categorie
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  categorie: prismic.ContentRelationshipField<"category">;
}

/**
 * Default variation for Categories Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CategoriesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<CategoriesSliceDefaultItem>
>;

/**
 * Slice variation for *Categories*
 */
type CategoriesSliceVariation = CategoriesSliceDefault;

/**
 * Categories Shared Slice
 *
 * - **API ID**: `categories`
 * - **Description**: Categories
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CategoriesSlice = prismic.SharedSlice<
  "categories",
  CategoriesSliceVariation
>;

/**
 * Primary content in *ContentPage → Primary*
 */
export interface ContentPageSliceDefaultPrimary {
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
   * Titre field in *ContentPage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.display_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_title: prismic.KeyTextField;

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
   * Logo du milieu field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_center
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_center: prismic.ImageField<never>;

  /**
   * Logo de droite field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_right
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_right: prismic.ImageField<never>;
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
   * Nombre de places restantes field in *ContentPage → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].remaining
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  remaining: prismic.NumberField;
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
   * Photo field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Titre field in *ContentPage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.display_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_title: prismic.KeyTextField;

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
 * Primary content in *Gallery → Primary*
 */
export interface GallerieSliceDefaultPrimary {
  /**
   * Catégorie field in *Gallery → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: gallerie.primary.category
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category">;
}

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
  Simplify<GallerieSliceDefaultPrimary>,
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
  slider_image: prismic.ImageField<"mobile">;
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
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      CategoriesSlice,
      CategoriesSliceDefaultItem,
      CategoriesSliceVariation,
      CategoriesSliceDefault,
      ContentPageSlice,
      ContentPageSliceDefaultPrimary,
      ContentPageSliceDefaultItem,
      ContentPageSliceImageLeftPrimary,
      ContentPageSliceVariation,
      ContentPageSliceDefault,
      ContentPageSliceImageLeft,
      GallerieSlice,
      GallerieSliceDefaultPrimary,
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
