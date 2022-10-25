import {CommentGet} from '../../types/types';

type CommentProps = {
    commentProps: CommentGet
}

export default function SingleReview({commentProps}:CommentProps):JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={commentProps.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {commentProps.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '94%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {commentProps.comment}
        </p>
        <time className="reviews__time" dateTime={commentProps.date}>{commentProps.date}</time>
      </div>
    </li>
  );
}
