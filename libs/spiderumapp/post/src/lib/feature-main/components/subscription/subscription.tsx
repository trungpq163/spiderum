import { Container, Left, Right, CategoryTitle } from './subscription.styles';
import { Avatar, Tooltip, Button } from '@nextui-org/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '@spiderum/shared/data-access/redux';

/* eslint-disable-next-line */
export interface SubscriptionProps {}

export function Subscription(props: SubscriptionProps) {
  const [following, setFollowing] = useState(false);
  const { postDetails, loading } = useSelector(
    (state: IRootState) => state.postDetails
  );

  return (
    <Container>
      <Left>
        <Avatar
          text="sc"
          size={66}
          src={`${process.env.NEXT_PUBLIC_API_AVATAR_URL}/${postDetails?.post?.creator_id?.avatar}`}
        />
        <div className="mr-auto">
          <h1 className="my-0 font-semibold leading-none text-black text-21">
            {postDetails?.post?.creator_id?.display_name}
          </h1>
          <p className="my-0 text-sm font-normal text-sub-black">
            @{postDetails?.post?.creator_id?.name}
          </p>
        </div>
        <Button
          auto
          onClick={() => setFollowing(!following)}
          color={following ? 'foreground' : 'primary'}
          rounded
          bordered={following}
        >
          {following ? 'Unfollow' : 'Follow'}
        </Button>
      </Left>
      <Right>
        <CategoryTitle>{postDetails?.post?.cat_id?.name}</CategoryTitle>
        <Button
          auto
          onClick={() => setFollowing(!following)}
          color={following ? 'foreground' : 'primary'}
          rounded
          bordered={following}
        >
          {following ? 'Unfollow' : 'Follow'}
        </Button>
      </Right>
    </Container>
  );
}

export default Subscription;
