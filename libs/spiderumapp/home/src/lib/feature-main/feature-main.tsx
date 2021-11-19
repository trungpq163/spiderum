/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Banner } from './feature-main.styles';
import { Link } from '@spiderum/shared/ui';
import { ROUTE } from '@spiderum/shared/util/route';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IRootState,
  getHotPosts,
  getHotPostsInFeed,
  getNewPosts,
  getNewPostsInFeed,
  getTopPosts,
  getTopPostsInFeed,
  getControversialPosts,
  getControversialPostsInFeed,
} from '@spiderum/shared/data-access/redux';
import { MainLayout } from '@spiderum/spiderumapp/shared/layout';
import { AllForYou } from './components/all-for-you/all-for-you';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { useState } from 'react';

export const FeatureMain: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: IRootState) => state.post);
  const [isInFeed, setIsInFeed] = useState<boolean>(false);

  const { authInfo } = useAuth();

  useEffect(() => {
    if (authInfo?.id) {
      setIsInFeed(true);
    }
  }, [authInfo?.id]);

  useEffect(() => {
    // getHotPostsAPI();
    // getNewPostsAPI();
    // getTopPostsAPI();
    // getControversialPostsAPI();
  }, []);

  // const getHotPostsAPI = () => {
  //   const page = 1;
  //   const type = 'hot';
  //   if (isInFeed) {
  //     dispatch(getHotPostsInFeed({ page, type }));
  //     return;
  //   }
  //   dispatch(getHotPosts({ page, type }));
  //   return;
  // };

  const getNewPostsAPI = () => {
    const page = 1;
    const type = 'new';
    if (isInFeed) {
      dispatch(getNewPostsInFeed({ page, type }));
      return;
    }
    dispatch(getNewPosts({ page, type }));
    return;
  };

  const getControversialPostsAPI = () => {
    const page = 1;
    const type = 'controversial';
    if (isInFeed) {
      dispatch(getControversialPostsInFeed({ page, type }));
      return;
    }
    dispatch(getControversialPosts({ page, type }));
    return;
  };

  const getTopPostsAPI = () => {
    const page = 1;
    const type = 'top';
    if (isInFeed) {
      dispatch(getTopPostsInFeed({ page, type }));
      return;
    }
    dispatch(getTopPosts({ page, type }));
    return;
  };

  return (
    <MainLayout>
      <Banner src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/40ff96a034c011ecb567655fead64d3e.jpeg" />
      <AllForYou /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Velit officiis consectetur accusantium dolores sed molestiae ab, magni
      magnam libero unde porro! Maiores assumenda doloremque sed ab optio enim
      officia illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ipsam similique, cumque ipsa suscipit, eveniet excepturi rerum id
      voluptatum et impedit cupiditate ullam illo quas sapiente. Accusamus
      architecto temporibus fugiat sunt? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Eligendi ullam voluptate quaerat ea culpa dignissimos
      perferendis. Architecto facilis nulla cupiditate? Voluptates est quam
      saepe facilis fugit dicta, voluptatem dolores temporibus?lorem Lorem ipsum
      dolor, sit amet consectetur adipisicing elit. Quidem voluptatibus alias
      dolorem illum recusandae vel sed, illo in possimus et error labore iste
      dolores mollitia architecto asperiores aliquid delectus est! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Nobis provident inventore,
      totam aspernatur nisi porro aut rem distinctio reiciendis cum eos
      veritatis alias veniam nihil fugiat recusandae ad quis modi! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Assumenda odit porro facilis
      reprehenderit possimus, libero adipisci excepturi totam, velit in
      doloribus. Doloremque sit, nostrum quae odit reprehenderit ipsum velit
      error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
      officiis consectetur accusantium dolores sed molestiae ab, magni magnam
      libero unde porro! Maiores assumenda doloremque sed ab optio enim officia
      illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
      similique, cumque ipsa suscipit, eveniet excepturi rerum id voluptatum et
      impedit cupiditate ullam illo quas sapiente. Accusamus architecto
      temporibus fugiat sunt? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Eligendi ullam voluptate quaerat ea culpa dignissimos perferendis.
      Architecto facilis nulla cupiditate? Voluptates est quam saepe facilis
      fugit dicta, voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit
      amet consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Velit officiis consectetur
      accusantium dolores sed molestiae ab, magni magnam libero unde porro!
      Maiores assumenda doloremque sed ab optio enim officia illo. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Ipsam similique, cumque ipsa
      suscipit, eveniet excepturi rerum id voluptatum et impedit cupiditate
      ullam illo quas sapiente. Accusamus architecto temporibus fugiat sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
      voluptate quaerat ea culpa dignissimos perferendis. Architecto facilis
      nulla cupiditate? Voluptates est quam saepe facilis fugit dicta,
      voluptatem dolores temporibus?lorem Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quidem voluptatibus alias dolorem illum
      recusandae vel sed, illo in possimus et error labore iste dolores mollitia
      architecto asperiores aliquid delectus est! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Nobis provident inventore, totam aspernatur
      nisi porro aut rem distinctio reiciendis cum eos veritatis alias veniam
      nihil fugiat recusandae ad quis modi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Assumenda odit porro facilis reprehenderit
      possimus, libero adipisci excepturi totam, velit in doloribus. Doloremque
      sit, nostrum quae odit reprehenderit ipsum velit error?
    </MainLayout>
  );
};

export default FeatureMain;
