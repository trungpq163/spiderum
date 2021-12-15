/* eslint-disable react-hooks/exhaustive-deps */
import { Title } from '@spiderum/spiderumapp/shared/ui';
import { Container, HotMember, HotMemberWrapper } from './hot-members.styles';
import { Avatar } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTopUsers, IRootState } from '@spiderum/shared/data-access/redux';
import { IUser } from '@spiderum/shared/util/typing';
/* eslint-disable-next-line */
export interface HotMembersProps {}

export function HotMembers(props: HotMembersProps) {
  const dispatch = useDispatch();
  const { loading, hotMembers } = useSelector(
    (state: IRootState) => state.users
  );

  useEffect(() => {
    dispatch(getTopUsers({ page: 1 }));
  }, []);

  return (
    <Container>
      <Title className="mb-0 leading-tight uppercase">THÀNH VIÊN NỔI BẬT</Title>
      <HotMemberWrapper>
        {hotMembers &&
          hotMembers.map((member: IUser, index: number) => (
            <HotMember className="flex flex-row gap-x-1" key={index}>
              {member?.avatar && (
                <Avatar
                  src={`${process.env.NEXT_PUBLIC_API_AVATAR_URL}/${member?.avatar}`}
                  size="large"
                  color="primary"
                  bordered
                />
              )}

              <div>
                <div className="text-sm font-bold text-black">
                  {member?.display_name}
                </div>
                <div className="font-normal text-13 text-sub-black">
                  @{member?.name}
                </div>
              </div>
            </HotMember>
          ))}
      </HotMemberWrapper>
    </Container>
  );
}

export default HotMembers;
