import type { DefinedName } from './defined_name';
import type { ExternalWorksheet } from './external_worksheet';

/**
 * A cell from another workbook (i.e. another file) that is referenced in this workbook.
 */
export type External = {
  /** Filename being referenced. */
  name: string;
  /**
   * Relevant worksheets from an external workbook.
   *
   * These will only be a subset of sheets needed to run calculations, so indexes from the original
   * workbooks will not be preserved.
   */
  sheets?: ExternalWorksheet[];
  /** Relevant defined names from an external workbook. */
  names?: DefinedName[];
};
