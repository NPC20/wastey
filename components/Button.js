import React from 'react';
import styled from 'styled-components';

/**
 *  When the Button component is used
 *  as a child of Link component from nextjs,
 *  the latter will pass a "ref" reference.
 *  React will complain about this with a
 *  warning. To avoid it we wrap Button in
 *  React.forwardRef(Button).
 *
 *  Resources:
 *  - https://github.com/vercel/next.js/issues/7915#issuecomment-519786376
 */
export default React.forwardRef(Button);

export function Button(props, ref) {

	return <S.Button>{getChildren()}</S.Button>;

	/**
	 *
	 *
	 *
	 */
	function getChildren() {
		return props.children;
	}
}

const S = {};

S.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px #0d0034;
  margin: 1rem;
  font-family: Monospace, sans-serif;
  background: transparent;
  text-transform: uppercase;
`;