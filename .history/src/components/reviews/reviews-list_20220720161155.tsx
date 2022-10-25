import SingleReview from './singleReview';
import {CommentList, CommentGet} from '../../types/types';

type CommentListProps = {
  commentGet:CommentList
}

export default function ReviewsList({commentGet}:CommentListProps):JSX.Element {


  return (
    <ul className="reviews__list">
      {commentGet.map((props:CommentGet) => <SingleReview key={props.id} commentProps={props}  />)}
    </ul>
  );
}
