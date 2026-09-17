export default function CommentForm() {
  return (
    <form
      className="form-comment"
      id="form-comment"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="header-form mb-30">
        <p className="title h3 fw-6 letter-space--3 color-title">
          Leave a Comment
        </p>
        <p className="desc color-paragraph ff-2">
          Your email address will not be published. Required fields are
          marked *
        </p>
      </div>

      <div className="col">
        <fieldset className="col-item">
          <label className="ff-2 fw-6 color-title" htmlFor="name">
            Full name*
          </label>
          <input type="text" name="name" id="name" placeholder="Your name" required />
        </fieldset>
        <fieldset className="col-item">
          <label className="ff-2 fw-6 color-title" htmlFor="email">
            Email Address*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
        </fieldset>
      </div>

      <fieldset className="mess-comment">
        <label className="ff-2 fw-6 color-title" htmlFor="mess">
          Your Comment*
        </label>
        <textarea name="mess" id="mess" placeholder="Write comment" required></textarea>
      </fieldset>

      <fieldset className="box-checkbox d-flex align-items-center g-10">
        <input
          type="checkbox"
          name="checkbox-1"
          id="checkbox-1"
          className="input-check-box"
          required
        />
        <label htmlFor="checkbox-1" className="text-checkbox ff-2 color-paragraph">
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </fieldset>

      <button type="submit" className="tf-btn style-big style-color-black">
        <span className="text-btn">Send Comment</span>
        <span className="icon-btn">
          <i className="icon-chevron-right"></i>
        </span>
      </button>
    </form>
  );
}
