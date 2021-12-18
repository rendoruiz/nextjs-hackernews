import { useState, useEffect } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

import { useRelativeTime } from '../../hooks/useDate';
import { useUser } from '../../hooks/useUser';
import UserAvatar from './UserAvatar';
import UserLink from './UserLink';
import { useNumberFormatter } from '../../hooks/useNumberFormatter';

const UserHoverCard = ({ userId, className, withPrefix, withAvatar, avatarClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return !userId ? null : (  
    <HoverCard.Root 
      open={isOpen}
      onOpenChange={(newState) => setIsOpen(newState)}
    >
      <HoverCard.Trigger asChild>
        <div className={className}>
          { (withAvatar || avatarClassName) && (
            <UserAvatar
              className={avatarClassName ?? "w-5 h-5"}
              userId={userId}
            />
          )}
          <UserLink
            userId={userId}
            withPrefix={withPrefix}
          />

        </div>
      </HoverCard.Trigger>
      <HoverCard.Content 
        className="grid gap-4 border-brandDefault border-brandBorder rounded p-3 pb-4 bg-white shadow-md"
        sideOffset={2}
        align="start"
      >
        <CardContent 
          userId={userId} 
          isOpen={isOpen}
        />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

const CardContent = ({ userId, isOpen }) => {
  const { isLoading, isError, isSuccess, data } = useUser(userId);
  const [relativeTime, setRelativeTime] = useState(null);
  const [karma, setKarma] = useState(null);
  const [submissions, setSubmissions] = useState(null);

  useEffect(() => {
    if (isOpen && data) {
      if (!relativeTime && data.created) {
        setRelativeTime(useRelativeTime(data.created))
      }
      if (!karma) {
        setKarma(useNumberFormatter(data.karma));
      }
      if (!submissions) {
        setSubmissions(!data.submitted ? "0" : useNumberFormatter(data.submitted.length));
      }
    }
  }, [isOpen, data]);

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (<>
    <section className="grid grid-cols-[auto,1fr] items-end gap-2">
      {/* heading */}
      <UserAvatar 
        className="w-9 h-9 text-2xl"
        userId={data.id}
      />
      {/* <div className="rounded bg-brandOrange "></div> */}
      <div className="grid">
        <UserLink
          className="font-medium text-lg text-brandTextPrimary"
          userId={data.id}
          withPrefix
        />
        <p className="text-xs text-brandTextSecondary leading-tight tracking-wide">
          { data.id } • { relativeTime }
        </p>
      </div>
    </section>

    {/* stats */}
    <section className="grid grid-cols-2 gap-5">
      {/* score */}
      <div className="grid">
        <p className="order-2 text-xs text-brandTextSecondary leading-snug tracking-wide">
          Karma
        </p>
        <p className="order-1 font-medium text-lg text-brandTextPrimary leading-snug">
          { karma }
        </p>
      </div>
      {/* creation date */}
      <div className="grid">
        <p className="order-2 text-xs text-brandTextSecondary leading-snug tracking-wide">
          Submissions
        </p>
        <p className="order-1 font-medium text-lg text-brandTextPrimary leading-snug">
          { submissions }
        </p>
      </div>
    </section>
  </>)
}

// fetch loading
const IsLoading = () => {
  return (
    <>
      <div className="grid grid-cols-[auto,1fr] items-end gap-2 mt-1">
        <div className="rounded-full w-9 h-9 bg-brandTextSecondary/30 animate-pulse"></div>
        <div className="grid gap-1">
          <div className="rounded-md w-20 h-6 bg-brandTextSecondary/30 animate-pulse"></div>
          <div className="rounded-md w-36 h-3 bg-brandTextSecondary/30 animate-pulse"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-1">
        <div className="grid gap-1">
          <div className="rounded-md w-10 h-5 bg-brandTextSecondary/30 animate-pulse"></div>
          <div className="rounded-md w-12 h-3 bg-brandTextSecondary/30 animate-pulse"></div>
        </div>
        <div className="grid gap-1">
          <div className="rounded-md w-10 h-5 bg-brandTextSecondary/30 animate-pulse"></div>
          <div className="rounded-md w-20 h-3 bg-brandTextSecondary/30 animate-pulse"></div>
        </div>
      </div>
    </>
  );
}

// fetch error
const IsError = () => {
  return (
    <div>An error occured.</div>
  )
}
 
export default UserHoverCard;