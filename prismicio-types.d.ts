// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * label field in *Navigation → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * main menu field in *Navigation → Links*
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
   * Links field in *Navigation*
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

type PageDocumentDataSlicesSlice = ContentPageSlice | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
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
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
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
  | NavigationDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *ContentPage → Primary*
 */
export interface ContentPageSliceDefaultPrimary {
  /**
   * display title field in *ContentPage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.display_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_title: prismic.KeyTextField;

  /**
   * Text block field in *ContentPage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.text_block
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_block: prismic.RichTextField;

  /**
   * Left logo field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_left
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_left: prismic.ImageField<never>;

  /**
   * Center logo field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_center
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_center: prismic.ImageField<never>;

  /**
   * Right logo field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.logo_right
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_right: prismic.ImageField<never>;

  /**
   * image field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *ContentPage → Items*
 */
export interface ContentPageSliceDefaultItem {
  /**
   * country field in *ContentPage → Items*
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
   * Start field in *ContentPage → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].start
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start: prismic.DateField;

  /**
   * End field in *ContentPage → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.items[].end
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end: prismic.DateField;

  /**
   * Places restantes field in *ContentPage → Items*
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
   * display title field in *ContentPage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.display_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  display_title: prismic.KeyTextField;

  /**
   * Text block field in *ContentPage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.text_block
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_block: prismic.RichTextField;

  /**
   * image field in *ContentPage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
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
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * slider image field in *Hero → Items*
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
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
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
      HeroSlice,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}
