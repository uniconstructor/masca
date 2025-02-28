import { clsx } from 'clsx';

interface ButtonProps {
  variant:
    | 'primary'
    | 'primary-active'
    | 'secondary-active'
    | 'secondary'
    | 'connect'
    | 'gray'
    | 'warning'
    | 'cancel'
    | 'cancel-red'
    | 'white'
    | 'white-pink'
    | 'done';
  size?: 'popup' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'wd' | 'icon';
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none' | 'inner' | '';
  onClick?: () => Promise<void> | void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  showTextOnLoading?: boolean;
}

const variants: Record<string, string> = {
  primary:
    'bg-pink-500 dark:bg-orange-accent-dark dark:text-navy-blue-900 hover:opacity-80 active:opacity-50 text-white',
  'primary-active':
    'text-orange-500 border border-orange-500 bg-white hover:text-white hover:bg-orange-500',
  secondary:
    'border-[0.225rem] border-pink-500 text-pink-500 hover:bg-pink-500/5 dark:hover:bg-orange-accent-dark/5 dark:border-orange-accent-dark dark:text-orange-accent-dark animated-transition',
  'secondary-active':
    'text-navy-blue-500 border border border-navy-blue-500 hover:text-white hover:bg-navy-blue-500',
  connect:
    'bg-pink-200 hover:bg-pink-200/60 dark:hover:bg-pink-200/80 text-gray-700',
  gray: 'bg-gray-200 text-gray-800 hover:opacity-80 active:opacity-50 dark:bg-navy-blue-700 dark:text-white',
  'white-pink':
    'bg-white text-gray-800 hover:text-white hover:bg-pink-400 dark:bg-orange-accent-dark dark:text-gray-900 dark:hover:bg-orange-accent-dark/80',
  white: 'bg-white text-gray-800 hover:opacity-80 active:opacity-50',
  warning: 'bg-red-500 hover:bg-red-500/90 text-white justify-center',
  cancel:
    'text-gray-700 dark:text-navy-blue-100 hover:opacity-80 active:opacity-50 underline underline-pink-500 dark:underline-orange-accent-dark underline-offset-4',
  'cancel-red':
    'text-red-500 dark:text-red-500 hover:opacity-80 active:opacity-50 underline underline-red-500 underline-offset-4',
  done: 'text-gray-600 dark:text-navy-blue-200 underline underline-gray-600 dark:underline-navy-blue-200 underline-offset-4 hover:opacity-80 active:opacity-50',
};

const sizes: Record<string, string> = {
  popup: 'md:text-sm py-2 px-3.5 text-xs',
  xs: 'lg:text-sm lg:py-2.5 lg:px-4 text-xs py-1.5 px-3',
  sm: 'lg:text-h5 lg:py-2.5 lg:px-5 md:text-h5 md:py-2.5 md:px-4 text-sm py-2 px-3.5',
  md: 'lg:text-h4 lg:py-2.5 lg:px-7 md:text-h5 md:py-2.5 md:px-5 text-sm py-2.5 px-4',
  lg: 'lg:text-2xl lg:py-2 lg:px-8 lg:font-normal md:text-h4 md:py-2.5 md:px-7 text-h5 py-2.5 px-5',
  xl: 'lg:text-h3 lg:py-2.5 lg:px-9 lg:font-semibold md:text-2xl md:py-2 md:px-8 md:font-normal text-h4 py-2.5 px-7',
  wd: 'lg:text-h4 lg:py-2.5 lg:px-7 md:text-h5 md:py-2 md:px-6 text-h5 py-1.5 px-6',
  icon: 'py-2 px-2',
};

const loaderSizes: Record<string, string> = {
  popup: 'md:w-4 md:h-4 h-3 w-3',
  xs: 'md:w-4 md:h-4 h-3 w-3',
  sm: 'lg:w-4 lg:h-4 w-3 h-3',
  md: 'md:w-4 md:h-4 w-3 h-3',
  lg: 'lg:w-6 lg:h-6 md:w-4 md:h-4 w-4 h-4',
  xl: 'lg:w-8 lg:h-6 md:w-6 md:h-6 w-4 h-4',
  wd: 'lg:w-8 lg:h-8 md:w-6 md:h-6 w-6 h-6 ',
  icon: 'md:w-4 md:h-4 h-3 w-3',
};

const loaderColors: Record<string, string> = {
  primary:
    'border-white dark:border-navy-blue-900 border-t-pink-900/0 dark:border-t-orange-accent-dark/0',
  'primary-active': 'border-orange-500',
  secondary: 'border-white',
  'secondary-active': 'border-navy-blue-500',
  connect: 'border-pink-500 border-t-pink-900/0',
  gray: 'border-gray-800',
  white: 'border-gray-800',
  warning: 'border-white',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  shadow = '',
  onClick,
  children,
  disabled = false,
  loading = false,
  showTextOnLoading = true,
}: ButtonProps) => (
  <button
    className={clsx(
      variants[variant],
      sizes[size],
      `shadow-${shadow}`,
      'animated-transition font-ubuntu flex max-w-xs items-center gap-x-2 rounded-full font-medium',
      'outline-none focus:outline-none'
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {loading && !showTextOnLoading ? '' : children}
    {loading && (
      <div
        className={clsx(
          loaderSizes[size],
          showTextOnLoading ? 'mr-1' : '',
          'animate-spin rounded-full border-2 border-solid',
          loaderColors[variant]
        )}
      ></div>
    )}
  </button>
);

export default Button;
