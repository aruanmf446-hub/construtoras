import type { PageId } from '../config/types';

/** Props every section receives from the SectionRenderer. */
export interface SectionProps {
  /** Visual index (01, 02…) computed from the rendered order. */
  index?: number;
  /** DOM id / URL anchor. */
  anchor: string;
  /** Label used by the floating navigation. */
  navLabel?: string;
  variant?: string;
  page?: PageId | null;
}
