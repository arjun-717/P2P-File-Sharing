import { Link } from 'next-view-transitions'
import { JSX } from 'react'

export default function ReturnHome(): JSX.Element {
  return (
    <div className="flex justify-center">
      <Link
        href="/"
        className="text-stone-500 dark:text-stone-200 hover:underline"
      >
        Start New Sharing  &raquo;
      </Link>
    </div>
  )
}
