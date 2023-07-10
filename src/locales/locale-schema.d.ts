interface Page {
  intro: string;
  route: string;
  title: string;
}
export default interface Locale {
  /** Two-character language code, eg 'pt' for Portuguese. */
  code: string;
  /** The content for `<meta name="description" ...>` in the `<head>`. */
  description: string;
  floorplan: Page;
  home: Page;
  moodboard: Page;
  visual: Page;
}
