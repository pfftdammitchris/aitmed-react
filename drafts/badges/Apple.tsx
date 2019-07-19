/*
appleBadge: {
    width: '100%',
    maxWidth: 100,
    height: 50,
  },
*/

const AppleBadge = () => (
  <a href={urls.appleApp} target="_blank" rel="noopener noreferrer">
    <img
      className={cx(classes.appleBadge, 'apple-badge')}
      src={appleStoreBadge}
      title="AiTmed Apple Mobile Application"
      alt=""
    />
  </a>
)
