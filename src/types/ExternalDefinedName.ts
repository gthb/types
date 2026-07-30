/**
 * A defined name in an external workbook.
 *
 * @see {@link DefinedName}
 * @group Workbooks
 */
export type ExternalDefinedName = {
  /**
   * A case-sensitive name. Names must start with a letter or `_`, and may only be made up of
   * letters as well as `\`, `_`, `.`, or `?`. Names must be a valid A1 or R1C1 reference.
   */
  name: string;
  /**
   * What the name refers to in the external workbook: either `=` followed by a single A1 cell or
   * rectangular range reference, such as `='Sheet1'!$A$2`, or the string `#REF!`.
   *
   * This is narrower than {@link DefinedName.value}, deliberately. It mirrors the
   * `externalDefinedName@refersTo` attribute of an OOXML external link, which holds a reference
   * and nothing else. A source definition that is not a single rectangular reference — a
   * constant, an expression over a reference, a union of two areas, a spill anchor — has no
   * representation here, and a producer writes `#REF!` in its place, as the application that
   * caches such a name does.
   *
   * A consumer resolves this against the external workbook's own
   * {@link ExternalWorksheet | worksheets} rather than evaluating it as a formula. An external
   * workbook is a cache of values, not a context in which formulas run, and the cached
   * {@link ExternalWorksheet.cells | cells} a reference lands on are the only data available.
   */
  value?: string;
  /**
   * An optional worksheet name that defines the scope for this name. When this field is absent,
   * the defined name should be considered to be scoped to the workbook.
   */
  scope?: string;
};
