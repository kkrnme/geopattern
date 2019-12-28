declare module "geopattern" {
  let generate: (string: string) => Pattern
  /**
   * Generated pattern.
   */
  interface Pattern {
    /**
     * Gets the pattern's background color as a hexadecimal string.
     */
    color: string

    /**
     * Gets the SVG string representing the pattern.
     */
    toString(): string

    /**
     * Gets the SVG string representing the pattern.
     */
    toSvg(): string

    /**
     * Gets the SVG as a Base64-encoded string.
     */
    toBase64(): string

    /**
     * Gets the pattern as a data URI,
     * @example 'data:image/svg+xml;base64,PHN2ZyB....'
     */
    toDataUri(): string

    /**
     * Gets the pattern as a data URL suitable for use as a CSS background-image,
     * @example 'url("data:image/svg+xml;base64,PHN2ZyB...")'
     */
    toDataUrl(): string
  }
}
