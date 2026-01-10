/**
 * UI Components
 * 3F Web Core Template - Fast + Fair + Flexible
 *
 * Reusable UI components built with shadcn patterns
 * Using class-variance-authority (cva) for consistent variants
 */

// Button
export { Button, buttonVariants } from './Button';
export type { ButtonProps } from './Button';

// Badge
export { Badge, badgeVariants } from './Badge';
export type { BadgeProps } from './Badge';

// Card
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBadge,
  CardImage,
  cardVariants,
  cardImageVariants,
} from './Card';
export type {
  CardProps,
  CardTitleProps,
  CardBadgeProps,
  CardImageProps,
} from './Card';

// SectionTitle
export { SectionTitle } from './SectionTitle';
export type { SectionTitleProps, SectionTitleAlign } from './SectionTitle';

// FloatingCTA
export { FloatingCTA } from './FloatingCTA';
export type { FloatingCTAProps } from './FloatingCTA';
