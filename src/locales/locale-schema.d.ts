export interface HomePageI {
  /** Introductory text, welcoming the user to the app. */
  intro: string;
  title: string;
}
export interface PopupI {
  route: string;
  /** Used as a tooltip when hovering over the link icon */
  title: string;
}
export interface CreativePageI {
  /** Introductory text, shown when no ID is present. */
  intro: string;
  route: string;
  title: string;
}
export default interface LocaleI {
  /** Two-character language code, eg 'pt' for Portuguese. */
  code: string;
  /** The content for `<meta name="description" ...>` in the `<head>`. */
  description: string;
  floorplan: CreativePageI;
  home: HomePageI;
  moodboard: CreativePageI;
  settings: PopupI;
  visual: CreativePageI;
}
