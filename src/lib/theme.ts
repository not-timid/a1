// Header and Panel-top.

export const bar =
  ' p-2 bg-gradient-to-b ' +
  ' from-grey-100 to-white text-grey-600 ' +
  ' dark:from-grey-900 dark:to-black dark:text-lemon '

// Panel.

export const panel =
  ' bg-grey-200 text-grey-900 ' +
  ' dark:bg-grey-800 dark:text-grey-200 '

// Shared by buttons and icons.

const barCommonOuter =
  ' inline-block align-top mx-1 '

const barCommonOuterInactive =
  ' pointer-events-none '

const barCommonInner =
  ' rounded-sm transition-colors ' +
  ' border border-lemon-100/10 dark:border-lemon-900/10 ' +
  ' bg-grey-100 dark:bg-grey-900 '

const barCommonActive = barCommonInner +
  ' hover:border-lemon hover:bg-lemon hover:text-black '

const barCommonInactive =
  ' border border-transparent ' +
  ' text-grey-300 dark:text-lemon-700 '

// Button.

const barButton = ' px-3 py-[4px] leading-[22px] '
export const barButtonActive =
  barCommonOuter + barButton + barCommonActive
export const barButtonInactive =
  barCommonOuter + barButton + barCommonInactive + barCommonOuterInactive

// Icon.

export const barIconOuterActive = barCommonOuter
export const barIconOuterInactive = barCommonOuter + barCommonOuterInactive

const barIcon = ' p-[4px] '
export const barIconActive = barIcon + barCommonInner + barCommonActive
export const barIconInactive = barIcon + barCommonInner + barCommonInactive
