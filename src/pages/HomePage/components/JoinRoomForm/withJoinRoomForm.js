import { useRef, useEffect } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export function withJoinRoomForm(Component) {
  function WithJoinRoomForm(props) {
    const inputRef = useRef();

    const pageProps = {
      inputRef,
    };

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithJoinRoomForm, Component);

  WithJoinRoomForm.displayName = `withJoinRoomForm(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithJoinRoomForm;
}
