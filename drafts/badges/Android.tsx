/*
  googleBadge: {
    width: '100%',
    maxWidth: 120,
    height: 50,
  },
*/

const AndroidBadge = () => (
  <a href={urls.googleApp} target="_blank" rel="noopener noreferrer">
    <img
      className={cx(classes.googleBadge, 'google-badge')}
      src={googlePlayBadge}
      title="AiTmed Google Mobile Application"
      alt=""
    />
  </a>
)
