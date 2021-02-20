import { useRef, useEffect } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export function withCreateRoomForm(Component) {
  function WithCreateRoomForm(props) {
    const inputRef = useRef();

    const pageProps = {
      inputRef,
    };

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithCreateRoomForm, Component);

  WithCreateRoomForm.displayName = `withCreateRoomForm(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithCreateRoomForm;
}
