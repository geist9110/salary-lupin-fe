import React, { cloneElement, isValidElement } from 'react';

/**
 * ReactNode에 draggable={false} 속성을 적용해주는 유틸 함수입니다.
 * 주로 <img> 같은 요소가 드래그되지 않도록 만들 때 사용합니다.
 *
 * @param node - ReactNode (보통 이미지나 컴포넌트)
 * @returns 새로운 ReactNode (draggable 속성 적용됨)
 */
function applyDraggableFalse(node: React.ReactNode): React.ReactNode {
  if (isValidElement(node)) {
    return cloneElement(node as React.ReactElement<HTMLElement>, { draggable: false });
  }
  return node;
}

export default applyDraggableFalse;
