// We have access to React, React DOM in this file

'use strict';

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this!';
  }

  // No JSX for now
  // return React.createElement(
  //   'button',
  //   {
  //     onClick: () => setLiked(true),
  //   },
  //   'Like'
  // );

  // With JSX
  return <button onClick={() => setLiked(true)}>Like</button>;
}

// Render component in the root
const rootNode = document.getElementById('like-button-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
