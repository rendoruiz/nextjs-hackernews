import Link from 'next/link';
import * as HoverCard from '@radix-ui/react-hover-card';

const UserHoverCard = ({ userId, withPrefix }) => {
  return (  
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link href={'user/' + userId}>
          <a className="hover:underline">
            { withPrefix && "u/" }
            { userId }
          </a>
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content 
        className="grid gap-4 border-brandDefault border-brandBorder rounded p-3 pb-4 bg-white shadow-md"
        sideOffset={2}
        align="start"
      >
        {/* heading */}
        <section className="grid grid-cols-[auto,1fr] items-end gap-2">
          <div className="rounded bg-brandOrange w-9 h-9"></div>
          <div className="grid">
            <Link href={'user/' + userId}>
              <a className="font-medium text-lg text-brandTextPrimary leading-tight">
                u/{ userId }
              </a>
            </Link>
            <p className="text-sm text-brandTextSecondary leading-tight">
              { userId } • [relative time to creation date]
            </p>
          </div>
        </section>

        {/* stats */}
        <section className="grid grid-cols-2 gap-5">
          {/* score */}
          <div className="grid">
            <p className="order-2 text-sm text-brandTextSecondary leading-snug">
              Karma
            </p>
            <p className="order-1 font-medium text-lg text-brandTextPrimary leading-snug">
              [karma score]
            </p>
          </div>
          {/* creation date */}
          <div className="grid">
            <p className="order-2 text-sm text-brandTextSecondary leading-snug">
              Cake Day
            </p>
            <p className="order-1 font-medium text-lg text-brandTextPrimary leading-snug">
              [creation date]
            </p>
          </div>
        </section>

      </HoverCard.Content>
    </HoverCard.Root>
  );
}
 
export default UserHoverCard;