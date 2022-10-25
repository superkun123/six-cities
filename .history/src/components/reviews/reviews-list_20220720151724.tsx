/* eslint-disable no-console */

import SingleReview from './singleReview';
import {CommentList} from '../../types/types';

type CommentListProps = {
  commentGet:CommentList
}

export default function ReviewsList({commentGet}:CommentListProps):JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ul className="reviews__list">
      // eslint-disable-next-line no-console
      {console.log(commentGet)}
      <SingleReview />
    </ul>
  );
}
